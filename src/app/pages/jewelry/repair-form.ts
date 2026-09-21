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
                max-width: 96rem;
                margin-inline: auto;
                width: 100%;
            }

            .compact-repair-page .card {
                padding: 1rem;
            }

            .compact-repair-page .section-heading {
                margin-bottom: 0.5rem;
            }

            .compact-repair-page .repair-group-label {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--text-color-secondary);
                font-size: 0.8rem;
                font-weight: 700;
                padding: 0.35rem 0.15rem 0;
            }

            .compact-repair-page .repair-group-card {
                border-top: 2px solid var(--primary-color);
            }

            .compact-repair-page .option-button {
                padding: 0.55rem 0.7rem;
                min-height: 2.5rem;
                line-height: 1.2;
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
                padding: 0.55rem 0.65rem;
                white-space: nowrap;
            }

            .compact-repair-page .table-scroll {
                overflow-x: auto;
            }

            .compact-repair-page .repair-table {
                min-width: 34rem;
            }

            .compact-repair-page .selected-list {
                border: 1px solid var(--surface-border);
                border-radius: 0.6rem;
                overflow: hidden;
            }

            .compact-repair-page .selected-list-header,
            .compact-repair-page .selected-list-row {
                display: grid;
                align-items: center;
                gap: 0.5rem;
                padding: 0.55rem 0.75rem;
            }

            .compact-repair-page .selected-list-header {
                color: var(--text-color-secondary);
                background: var(--surface-50);
                font-size: 0.72rem;
                font-weight: 700;
                letter-spacing: 0.03em;
                text-transform: uppercase;
            }

            .compact-repair-page .product-row,
            .compact-repair-page .product-selected-list .selected-list-header {
                grid-template-columns: minmax(0, 1fr) 6.5rem 2.25rem;
            }

            .compact-repair-page .labor-row,
            .compact-repair-page .labor-selected-list .selected-list-header {
                grid-template-columns: minmax(12rem, 1fr) 7rem 9rem 9rem 2.25rem;
                min-width: 41.25rem;
            }

            .compact-repair-page .labor-selected-list {
                overflow-x: auto;
            }

            .compact-repair-page .selected-list-row {
                min-height: 3.25rem;
                border-top: 1px solid var(--surface-border);
                background: var(--surface-0);
            }

            .compact-repair-page .selected-item-name {
                min-width: 0;
                overflow: hidden;
                font-weight: 600;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .compact-repair-page .selected-list .quantity-field,
            .compact-repair-page .selected-list .price-field {
                width: 100%;
                min-width: 0;
            }

            .compact-repair-page .quantity-control {
                display: grid;
                grid-template-columns: 1.75rem minmax(2rem, 1fr) 1.75rem;
                align-items: center;
                width: 6.5rem;
                overflow: hidden;
                border: 1px solid var(--surface-border);
                border-radius: 0.45rem;
                background: var(--surface-0);
            }

            .compact-repair-page .quantity-button {
                height: 2rem;
                border: 0;
                color: var(--text-color-secondary);
                background: var(--surface-50);
                cursor: pointer;
                font-size: 1rem;
                line-height: 1;
            }

            .compact-repair-page .quantity-button:hover {
                color: var(--primary-color);
                background: var(--primary-50);
            }

            .compact-repair-page .quantity-input {
                width: 100%;
                min-width: 0;
                height: 2rem;
                padding: 0 0.15rem;
                border: 0;
                border-right: 1px solid var(--surface-border);
                border-left: 1px solid var(--surface-border);
                border-radius: 0;
                text-align: center;
                box-shadow: none;
            }

            .compact-repair-page .quantity-input::-webkit-inner-spin-button,
            .compact-repair-page .quantity-input::-webkit-outer-spin-button {
                margin: 0;
                appearance: none;
            }

            .compact-repair-page .selected-total {
                overflow: hidden;
                text-align: right;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .compact-repair-page .selected-list-empty {
                padding: 1rem;
                color: var(--text-color-secondary);
                font-size: 0.85rem;
                text-align: center;
            }

            .compact-repair-page .quantity-field,
            .compact-repair-page .price-field,
            .compact-repair-page .metal-field {
                display: inline-flex;
                width: 100%;
                min-width: 0;
            }

            .compact-repair-page .metal-label {
                min-width: 3rem;
            }

            .compact-repair-page .summary-card {
                align-self: start;
            }

            .compact-repair-page .summary-actions {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                margin-top: 1rem;
                padding-top: 0.75rem;
                border-top: 1px solid var(--surface-border);
            }

            .compact-repair-page .summary-actions .primary-actions {
                display: grid;
                gap: 0.5rem;
            }

            .compact-repair-page .summary-actions .secondary-actions {
                display: flex;
                justify-content: flex-end;
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
    productSearch = '';
    laborSearch = '';

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

    addProduct(name: string) {
        const product = this.draft.products.find((item) => item.name === name);
        this.draft.products = product
            ? this.draft.products.map((item) => (item.name === name ? { ...item, quantity: item.quantity + 1 } : item))
            : [...this.draft.products, { name, quantity: 1 }];
    }

    removeProduct(product: RepairProduct) {
        this.draft.products = this.draft.products.filter((item) => item.name !== product.name);
    }

    changeProductQuantity(product: RepairProduct, amount: number) {
        product.quantity = Math.max(1, (product.quantity || 1) + amount);
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

    changeLaborQuantity(labor: RepairLabor, amount: number) {
        labor.quantity = Math.max(1, (labor.quantity ?? 1) + amount);
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
