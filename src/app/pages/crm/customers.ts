import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';

interface Customer {
    id: number;
    name: string;
    mobilePhone: string;
    workPhone: string;
    taxNumber: string;
    address: string;
    email: string;
    notes: string;
    creditLimit: number;
    installmentTotal: number;
    debt: number;
    goldDebtGrams: number;
    status: 'Aktif' | 'Pasif';
}
interface RepairHistory {
    id: number;
    customerId: number;
    product: string;
    status: 'Başladı' | 'Tamamlandı';
    date: string;
    laborTotal: number;
    metalTotal: number;
    metals: string;
    labors: string;
    collected: number;
}
interface DebtTransaction {
    date: string;
    description: string;
    type: 'Borç' | 'Tahsilat';
    amount: number;
    goldGrams?: number;
}

@Component({
    selector: 'app-customers',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, SelectModule, TableModule, TagModule, TextareaModule],
    templateUrl: './customers.html',
    styleUrls: ['./customers.scss']
})
export class Customers {
    customers: Customer[] = [
        {
            id: 1,
            name: 'ALİ ÖZCAN',
            mobilePhone: '0532 555 10 10',
            workPhone: '',
            taxNumber: '1234567890',
            address: 'İstanbul',
            email: 'ali@example.com',
            notes: '',
            creditLimit: 10000,
            installmentTotal: 0,
            debt: 155,
            goldDebtGrams: 0,
            status: 'Aktif'
        },
        { id: 2, name: 'ALTINKENT', mobilePhone: '', workPhone: '0212 555 20 20', taxNumber: '2345678901', address: 'İstanbul', email: '', notes: '', creditLimit: 25000, installmentTotal: 1605, debt: 1605, goldDebtGrams: 2.35, status: 'Aktif' },
        { id: 3, name: 'ARZU PIRLANTA', mobilePhone: '0542 555 30 30', workPhone: '', taxNumber: '3456789012', address: 'İzmir', email: '', notes: '', creditLimit: 15000, installmentTotal: 0, debt: 0, goldDebtGrams: 0, status: 'Aktif' },
        { id: 4, name: 'ATASAY ARENA PARK', mobilePhone: '', workPhone: '0216 555 40 40', taxNumber: '4567890123', address: 'İstanbul', email: '', notes: '', creditLimit: 30000, installmentTotal: 1160, debt: 1160, goldDebtGrams: 0, status: 'Aktif' },
        { id: 5, name: 'ATEŞ SARRAFİYE', mobilePhone: '0551 555 50 50', workPhone: '', taxNumber: '5678901234', address: 'Ankara', email: '', notes: '', creditLimit: 12000, installmentTotal: 0, debt: 0, goldDebtGrams: 0, status: 'Aktif' }
    ];
    filteredCustomers = [...this.customers];
    selectedCustomer: Customer | null = null;
    dialogVisible = false;
    editingId: number | null = null;
    draft: Customer = this.emptyCustomer();
    repairDialogVisible = false;
    debtDialogVisible = false;
    selectedRepair: RepairHistory | null = null;
    repairHistory: RepairHistory[] = [
        { id: 1001, customerId: 1, product: 'Altın bileklik', status: 'Başladı', date: '20.09.2026 10:15', laborTotal: 350, metalTotal: 1.25, metals: 'Altın 1,250 gr', labors: 'Kaynak işçiliği', collected: 0 },
        { id: 1000, customerId: 3, product: 'Pırlanta yüzük', status: 'Tamamlandı', date: '19.09.2026 14:40', laborTotal: 250, metalTotal: 0, metals: '', labors: 'Cila işçiliği', collected: 0 },
        { id: 999, customerId: 2, product: 'Altın yüzük', status: 'Başladı', date: '19.09.2026 11:25', laborTotal: 500, metalTotal: 0.85, metals: 'Altın 0,850 gr', labors: 'Taş takma işçiliği', collected: 0 },
        { id: 998, customerId: 4, product: 'Gümüş kolye', status: 'Başladı', date: '18.09.2026 16:05', laborTotal: 300, metalTotal: 0, metals: '', labors: 'Ölçü küçültme', collected: 0 }
    ];
    collectionDialogVisible = false;
    collectionAmount = 0;
    customerCollectionDialogVisible = false;
    customerCollectionType: 'Nakit' | 'Altın' = 'Nakit';
    customerCollectionAmount = 0;
    customerCollectionGoldGrams = 0;
    collectionTypes = ['Nakit', 'Altın'];
    debtDialogMode: 'view' | 'add' = 'view';
    manualDebtDialogVisible = false;
    manualDebtType: 'Nakit' | 'Altın' = 'Nakit';
    manualDebtAmount = 0;
    manualDebtGoldGrams = 0;
    debtTransactions: Record<number, DebtTransaction[]> = {
        1: [
            { date: '20.09.2026', description: 'Tamir işçiliği - TMR-1001', type: 'Borç', amount: 350 },
            { date: '15.09.2026', description: 'Nakit tahsilat', type: 'Tahsilat', amount: 195 }
        ],
        2: [{ date: '19.09.2026', description: 'Tamir işçiliği ve maden', type: 'Borç', amount: 1605, goldGrams: 2.35 }],
        3: [],
        4: [{ date: '18.09.2026', description: 'Tamir işçiliği - TMR-998', type: 'Borç', amount: 300 }],
        5: []
    };

    get totalDebt() {
        return this.customers.reduce((total, customer) => total + customer.debt, 0);
    }
    get selectedRepairs() {
        return this.selectedCustomer ? this.repairHistory.filter((repair) => repair.customerId === this.selectedCustomer?.id) : [];
    }
    get selectedLaborTotal() {
        return this.selectedRepairs.reduce((total, repair) => total + repair.laborTotal, 0);
    }
    get selectedMetalTotal() {
        return this.selectedRepairs.reduce((total, repair) => total + repair.metalTotal, 0);
    }
    get selectedCreditUsagePercent() {
        if (!this.selectedCustomer?.creditLimit) return 0;
        return Math.min(100, (this.selectedCustomer.debt / this.selectedCustomer.creditLimit) * 100);
    }
    get selectedDebtStatus() {
        if (!this.selectedCustomer) return 'Borç bilgisi yok';
        if (this.selectedCustomer.debt <= 0 && this.selectedCustomer.goldDebtGrams <= 0) return 'Borç bulunmuyor';
        if (this.selectedCustomer.creditLimit > 0 && this.selectedCustomer.debt >= this.selectedCustomer.creditLimit) return 'Limit dolu';
        return 'Açık hesap';
    }
    get selectedDebtTransactions() {
        return this.selectedCustomer ? (this.debtTransactions[this.selectedCustomer.id] ?? []) : [];
    }
    filter(event: Event) {
        const value = (event.target as HTMLInputElement).value.toLocaleLowerCase('tr-TR');
        this.filteredCustomers = this.customers.filter((customer) => Object.values(customer).some((field) => String(field).toLocaleLowerCase('tr-TR').includes(value)));
    }
    selectCustomer(customer: Customer | Customer[] | undefined) {
        this.selectedCustomer = customer && !Array.isArray(customer) ? customer : null;
    }
    openDebtDetails() {
        this.debtDialogMode = 'view';
        this.debtDialogVisible = true;
    }
    openManualDebt() {
        if (!this.selectedCustomer) return;
        this.manualDebtType = 'Nakit';
        this.manualDebtAmount = 0;
        this.manualDebtGoldGrams = 0;
        this.manualDebtDialogVisible = true;
    }
    openCustomerCollection() {
        if (!this.selectedCustomer) return;
        this.customerCollectionType = 'Nakit';
        this.customerCollectionAmount = 0;
        this.customerCollectionGoldGrams = 0;
        this.customerCollectionDialogVisible = true;
    }
    openRepairDetails(repair: RepairHistory) {
        this.selectedRepair = repair;
        this.repairDialogVisible = true;
    }
    backToList() {
        this.selectedCustomer = null;
    }
    openCollection(repair: RepairHistory) {
        if (repair.status === 'Tamamlandı') {
            this.collectionAmount = repair.laborTotal - repair.collected;
            this.collectionDialogVisible = true;
        }
    }
    collectRepair() {
        if (!this.selectedRepair || this.collectionAmount <= 0) return;
        const amount = Math.min(this.selectedRepair.laborTotal - this.selectedRepair.collected, this.collectionAmount);
        this.selectedRepair.collected += amount;
        if (this.selectedCustomer) {
            this.selectedCustomer.debt = Math.max(0, this.selectedCustomer.debt - amount);
            this.debtTransactions[this.selectedCustomer.id] = [
                ...(this.debtTransactions[this.selectedCustomer.id] ?? []),
                { date: new Date().toLocaleDateString('tr-TR'), description: `Tamir tahsilatı - TMR-${this.selectedRepair.id}`, type: 'Tahsilat', amount }
            ];
        }
        this.collectionDialogVisible = false;
        this.repairDialogVisible = false;
    }
    collectCustomerDebt() {
        if (!this.selectedCustomer) return;
        const customer = this.selectedCustomer;
        if (this.customerCollectionType === 'Nakit' && this.customerCollectionAmount > 0) {
            const amount = Math.min(customer.debt, this.customerCollectionAmount);
            customer.debt -= amount;
            this.debtTransactions[customer.id] = [...(this.debtTransactions[customer.id] ?? []), { date: new Date().toLocaleDateString('tr-TR'), description: 'Müşteri nakit tahsilatı', type: 'Tahsilat', amount }];
        } else if (this.customerCollectionType === 'Altın' && this.customerCollectionGoldGrams > 0) {
            const grams = Math.min(customer.goldDebtGrams, this.customerCollectionGoldGrams);
            customer.goldDebtGrams -= grams;
            this.debtTransactions[customer.id] = [...(this.debtTransactions[customer.id] ?? []), { date: new Date().toLocaleDateString('tr-TR'), description: 'Müşteri altın tahsilatı', type: 'Tahsilat', amount: 0, goldGrams: grams }];
        } else {
            return;
        }
        this.customerCollectionDialogVisible = false;
    }
    addManualDebt() {
        if (!this.selectedCustomer) return;
        const customer = this.selectedCustomer;
        if (this.manualDebtType === 'Nakit' && this.manualDebtAmount > 0) {
            customer.debt += this.manualDebtAmount;
            this.debtTransactions[customer.id] = [...(this.debtTransactions[customer.id] ?? []), { date: new Date().toLocaleDateString('tr-TR'), description: 'Manuel TL borç ekleme', type: 'Borç', amount: this.manualDebtAmount }];
        } else if (this.manualDebtType === 'Altın' && this.manualDebtGoldGrams > 0) {
            customer.goldDebtGrams += this.manualDebtGoldGrams;
            this.debtTransactions[customer.id] = [...(this.debtTransactions[customer.id] ?? []), { date: new Date().toLocaleDateString('tr-TR'), description: 'Manuel altın borç ekleme', type: 'Borç', amount: 0, goldGrams: this.manualDebtGoldGrams }];
        } else {
            return;
        }
        this.manualDebtDialogVisible = false;
    }
    openNew() {
        this.editingId = null;
        this.draft = this.emptyCustomer();
        this.dialogVisible = true;
    }
    edit(customer: Customer) {
        this.editingId = customer.id;
        this.draft = { ...customer };
        this.dialogVisible = true;
    }
    save() {
        if (!this.draft.name.trim()) return;
        if (this.editingId === null) this.customers = [...this.customers, { ...this.draft, id: Date.now(), debt: 0 }];
        else this.customers = this.customers.map((customer) => (customer.id === this.editingId ? { ...this.draft, id: this.editingId } : customer));
        this.filteredCustomers = [...this.customers];
        this.selectedCustomer = this.customers.find((customer) => customer.id === (this.editingId ?? this.customers[this.customers.length - 1].id)) ?? null;
        this.dialogVisible = false;
    }
    showInfo(message: string) {
        window.alert(message);
    }
    private emptyCustomer(): Customer {
        return { id: 0, name: '', mobilePhone: '', workPhone: '', taxNumber: '', address: '', email: '', notes: '', creditLimit: 0, installmentTotal: 0, debt: 0, goldDebtGrams: 0, status: 'Aktif' };
    }
}
