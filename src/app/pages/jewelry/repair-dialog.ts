import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RepairLabor, RepairMetal, RepairProduct, RepairRecord, RepairStateService } from './repair-state.service';

@Component({
    selector: 'app-repair-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, TableModule],
    templateUrl: './repair-dialog.html',
    styles: [
        `
            .repair-dialog .quantity-field {
                width: 6rem;
                min-width: 6rem;
            }

            .repair-dialog .price-field {
                width: 8rem;
                min-width: 8rem;
            }

            .repair-dialog .selected-table {
                table-layout: fixed;
            }

            .repair-dialog .selected-table th:first-child,
            .repair-dialog .selected-table td:first-child {
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .repair-dialog .selected-table .quantity-column {
                width: 7rem;
            }

            .repair-dialog .selected-table .price-column {
                width: 9rem;
            }

            .repair-dialog .selected-table .total-column {
                width: 9rem;
            }

            .repair-dialog .selected-table .action-column {
                width: 3rem;
                text-align: center;
            }
        `
    ]
})
export class RepairDialog {
    @Input() visible = false;
    @Output() visibleChange = new EventEmitter<boolean>();
    @Input() editingId: number | null = null;
    @Input() draft!: RepairRecord;
    @Output() saveRepair = new EventEmitter<RepairRecord>();
    @Input() title = 'Tamir başlat';
    readonly customerOptions: string[];
    readonly userOptions: string[];
    readonly productOptions: string[];
    readonly labors: RepairLabor[];
    readonly metalTypes: Array<'Altın' | 'Gümüş'>;
    metalDraft: RepairMetal & { gramsByType: Record<string, number> } = { id: 0, type: 'Altın', grams: 0, gramsByType: { Altın: 0, Gümüş: 0 } };
    receiptVisible = false;
    productSearch = '';
    laborSearch = '';

    constructor(private readonly repairState: RepairStateService) {
        this.customerOptions = repairState.customerOptions;
        this.userOptions = repairState.userOptions;
        this.productOptions = repairState.productOptions;
        this.labors = repairState.labors;
        this.metalTypes = repairState.metalTypes;
    }

    laborTotal(repair: RepairRecord) {
        return repair.labor.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
    }

    productTotal(repair: RepairRecord) {
        return repair.products.reduce((total, item) => total + item.quantity, 0);
    }

    laborCount(repair: RepairRecord) {
        return repair.labor.reduce((total, item) => total + (item.quantity ?? 1), 0);
    }

    metalTotal(repair: RepairRecord) {
        return repair.preciousMetals.reduce((total, item) => total + item.grams, 0);
    }

    get filteredProducts() {
        const query = this.productSearch.trim().toLocaleLowerCase('tr-TR');
        return query ? this.productOptions.filter((product) => product.toLocaleLowerCase('tr-TR').includes(query)) : this.productOptions;
    }

    get filteredLabors() {
        const query = this.laborSearch.trim().toLocaleLowerCase('tr-TR');
        return query ? this.labors.filter((labor) => labor.name.toLocaleLowerCase('tr-TR').includes(query)) : this.labors;
    }

    get canPrintReceipt() {
        return this.draft.products.length > 0 || this.draft.labor.length > 0 || this.draft.preciousMetals.length > 0;
    }

    hasLabor(labor: RepairLabor) {
        return this.draft.labor.some((item) => item.id === labor.id);
    }

    addLabor(labor: RepairLabor) {
        if (this.draft.status === 'Tamamlandı') return;
        const selectedLabor = this.draft.labor.find((item) => item.id === labor.id);
        this.draft.labor = selectedLabor
            ? this.draft.labor.map((item) => (item.id === labor.id ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item))
            : [...this.draft.labor, { ...labor, quantity: 1 }];
    }

    addProduct(product: string) {
        if (this.draft.status !== 'Tamamlandı') {
            const selectedProduct = this.draft.products.find((item) => item.name === product);
            this.draft.products = selectedProduct
                ? this.draft.products.map((item) => (item.name === product ? { ...item, quantity: item.quantity + 1 } : item))
                : [...this.draft.products, { name: product, quantity: 1 }];
        }
    }

    removeProduct(product: RepairProduct) {
        if (this.draft.status !== 'Tamamlandı') {
            this.draft.products = this.draft.products.filter((item) => item.name !== product.name);
        }
    }

    removeLabor(labor: RepairLabor) {
        this.draft.labor = this.draft.labor.filter((item) => item.id !== labor.id);
    }

    addMetal(type: 'Altın' | 'Gümüş') {
        const grams = this.metalDraft.gramsByType[type] ?? 0;
        if (this.draft.status !== 'Tamamlandı' && grams > 0) {
            this.draft.preciousMetals = [...this.draft.preciousMetals, { id: Date.now(), type, grams }];
            this.metalDraft.gramsByType[type] = 0;
        }
    }

    removeMetal(metal: RepairMetal) {
        this.draft.preciousMetals = this.draft.preciousMetals.filter((item) => item.id !== metal.id);
    }

    close() {
        this.visibleChange.emit(false);
    }

    openReceipt() {
        if (!this.canPrintReceipt) return;
        this.receiptVisible = true;
    }

    printReceipt() {
        if (!this.canPrintReceipt) return;
        const receiptWindow = window.open('', '_blank', 'width=360,height=720');
        if (!receiptWindow) return;

        const products = this.draft.products.map((item) => `<li>${item.name} <strong>x${item.quantity}</strong></li>`).join('');
        const labors = this.draft.labor
            .map((item) => `<li>${item.name} x${item.quantity ?? 1}<span>${(item.price * (item.quantity ?? 1)).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span></li>`)
            .join('');
        const metals = this.draft.preciousMetals.map((item) => `<li>${item.type}<span>${item.grams.toLocaleString('tr-TR', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} gr</span></li>`).join('');

        receiptWindow.document.write(`
            <!doctype html>
            <html lang="tr">
                <head>
                    <meta charset="utf-8">
                    <title>Tamir Fişi</title>
                    <style>
                        @page { size: 80mm auto; margin: 0; }
                        * { box-sizing: border-box; }
                        body { width: 72mm; margin: 0 auto; padding: 4mm 0; color: #111; font: 12px/1.4 Arial, sans-serif; }
                        h1 { margin: 0 0 2mm; text-align: center; font-size: 16px; }
                        .muted { color: #555; text-align: center; }
                        .line { border-top: 1px dashed #222; margin: 3mm 0; }
                        .row, li { display: flex; justify-content: space-between; gap: 8px; }
                        ul { list-style: none; padding: 0; margin: 1mm 0; }
                        li { margin: 1mm 0; }
                        .total { font-size: 14px; font-weight: 700; }
                    </style>
                </head>
                <body>
                    <h1>TAMİR FİŞİ</h1>
                    <div class="muted">${this.draft.customer || '-'}</div>
                    <div class="row"><span>Getiren</span><strong>${this.draft.broughtBy || '-'}</strong></div>
                    <div class="line"></div>
                    <strong>Ürünler</strong><ul>${products || '<li>-</li>'}</ul>
                    <div class="line"></div>
                    <strong>İşçilikler</strong><ul>${labors || '<li>-</li>'}</ul>
                    <div class="line"></div>
                    <strong>Kıymetli madenler</strong><ul>${metals || '<li>-</li>'}</ul>
                    <div class="line"></div>
                    <div class="row total"><span>İşçilik toplamı</span><span>${this.laborTotal(this.draft).toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span></div>
                </body>
            </html>
        `);
        receiptWindow.document.close();
        receiptWindow.focus();
        receiptWindow.print();
        receiptWindow.close();
    }

    save() {
        if (!this.draft.customer.trim() || !this.draft.broughtBy.trim() || !this.draft.products.length) return;
        this.saveRepair.emit(this.draft);
    }
}
