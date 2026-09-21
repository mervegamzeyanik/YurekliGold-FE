import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RepairLabor, RepairMetal, RepairProduct, RepairRecord, RepairStateService } from './repair-state.service';

@Component({
    selector: 'app-repair-form',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, TableModule],
    templateUrl: './repair-form.html',
    styles: [
        `
            .compact-repair-page {
                --repair-gap: 0.75rem;
            }

            .compact-repair-page .card {
                padding: 0.75rem;
            }

            .compact-repair-page .section-heading {
                margin-bottom: 0.5rem;
            }

            .compact-repair-page .option-button {
                padding: 0.4rem 0.55rem;
                min-height: 2.15rem;
                line-height: 1.1;
            }

            .compact-repair-page .option-button i {
                display: none;
            }

            .compact-repair-page .option-picker {
                max-height: 9.5rem;
                overflow-y: auto;
                padding-right: 0.15rem;
            }

            .compact-repair-page .p-datatable .p-datatable-tbody > tr > td,
            .compact-repair-page .p-datatable .p-datatable-thead > tr > th {
                padding: 0.35rem 0.45rem;
                white-space: nowrap;
            }

            .compact-repair-page .table-scroll {
                overflow-x: auto;
            }

            .compact-repair-page .repair-table {
                min-width: 34rem;
            }

            .compact-repair-page .labor-table {
                min-width: 52rem;
            }

            .compact-repair-page .quantity-field,
            .compact-repair-page .price-field,
            .compact-repair-page .metal-field {
                display: inline-flex;
                width: 100%;
            }

            .compact-repair-page .quantity-field {
                min-width: 6rem;
                max-width: 6rem;
            }

            .compact-repair-page .price-field {
                min-width: 8rem;
                max-width: 8rem;
            }

            .compact-repair-page .metal-label {
                min-width: 3rem;
            }

            .compact-repair-page .summary-card {
                top: 1rem;
            }

            @media (max-width: 1279px) {
                .compact-repair-page .summary-card {
                    position: static;
                }
            }
        `
    ]
})
export class RepairForm {
    draft: RepairRecord = this.emptyRepair();
    readonly customerOptions: string[];
    readonly userOptions: string[];
    readonly productOptions: string[];
    readonly labors: RepairLabor[];
    readonly metalTypes: Array<'Altın' | 'Gümüş'>;
    metalDraft: RepairMetal & { gramsByType: Record<string, number> } = { id: 0, type: 'Altın', grams: 0, gramsByType: { Altın: 0, Gümüş: 0 } };
    receiptVisible = false;

    constructor(
        private readonly repairState: RepairStateService,
        private readonly router: Router
    ) {
        this.customerOptions = repairState.customerOptions;
        this.userOptions = repairState.userOptions;
        this.productOptions = repairState.productOptions;
        this.labors = repairState.labors;
        this.metalTypes = repairState.metalTypes;
    }

    get productCount() {
        return this.draft.products.reduce((total, item) => total + item.quantity, 0);
    }

    get laborCount() {
        return this.draft.labor.reduce((total, item) => total + (item.quantity ?? 1), 0);
    }

    get laborTotal() {
        return this.draft.labor.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
    }

    get metalTotal() {
        return this.draft.preciousMetals.reduce((total, item) => total + item.grams, 0);
    }

    addProduct(name: string) {
        const product = this.draft.products.find((item) => item.name === name);
        this.draft.products = product
            ? this.draft.products.map((item) => (item.name === name ? { ...item, quantity: item.quantity + 1 } : item))
            : [...this.draft.products, { name, quantity: 1 }];
    }

    removeProduct(product: RepairProduct) {
        this.draft.products = this.draft.products.filter((item) => item.name !== product.name);
    }

    addLabor(labor: RepairLabor) {
        const item = this.draft.labor.find((selected) => selected.id === labor.id);
        this.draft.labor = item
            ? this.draft.labor.map((selected) => (selected.id === labor.id ? { ...selected, quantity: (selected.quantity ?? 1) + 1 } : selected))
            : [...this.draft.labor, { ...labor, quantity: 1 }];
    }

    removeLabor(labor: RepairLabor) {
        this.draft.labor = this.draft.labor.filter((item) => item.id !== labor.id);
    }

    addMetal(type: 'Altın' | 'Gümüş') {
        const grams = this.metalDraft.gramsByType[type] ?? 0;
        if (grams > 0) {
            this.draft.preciousMetals = [...this.draft.preciousMetals, { id: Date.now(), type, grams }];
            this.metalDraft.gramsByType[type] = 0;
        }
    }

    removeMetal(metal: RepairMetal) {
        this.draft.preciousMetals = this.draft.preciousMetals.filter((item) => item.id !== metal.id);
    }

    openReceipt() {
        this.receiptVisible = true;
    }

    printReceipt() {
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
                        @media print { body { width: 72mm; } }
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
                    <div class="row total"><span>İşçilik toplamı</span><span>${this.laborTotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL</span></div>
                </body>
            </html>
        `);
        receiptWindow.document.close();
        receiptWindow.focus();
        receiptWindow.print();
        receiptWindow.close();
    }

    save() {
        if (!this.draft.customer || !this.draft.broughtBy || !this.draft.products.length) return;
        this.repairState.add({
            ...this.draft,
            id: Date.now(),
            status: 'Başladı',
            createdAt: '20.09.2026 ' + new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        });
        this.router.navigate(['/repairs']);
    }

    cancel() {
        this.router.navigate(['/repairs']);
    }

    private emptyRepair(): RepairRecord {
        return { id: 0, customer: '', broughtBy: '', products: [], description: '', labor: [], preciousMetals: [], status: 'Başladı', createdAt: '' };
    }
}
