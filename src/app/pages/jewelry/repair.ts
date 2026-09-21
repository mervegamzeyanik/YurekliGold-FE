import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RepairRecord, RepairStateService } from './repair-state.service';
import { RepairDialog } from './repair-dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-repair',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, TableModule, TagModule, RepairDialog],
    templateUrl: './repair.html'
})
export class Repair {
    searchTerm = '';
    statusFilter: 'Tümü' | 'Başladı' | 'Tamamlandı' = 'Tümü';
    customerFilter = 'Tümü';
    dateFilter: 'Tümü' | 'Bugün' | 'Son 7 gün' = 'Tümü';
    dialogVisible = false;
    editingId: number | null = null;
    draft: RepairRecord = this.emptyRepair();
    constructor(
        private repairState: RepairStateService,
        private router: Router
    ) {}

    get repairs() {
        return this.repairState.records();
    }
    get visibleRepairs() {
        const value = this.searchTerm.toLocaleLowerCase('tr-TR');
        const now = new Date();
        return this.repairs.filter((item) => {
            const matchesSearch = `${item.customer} ${item.products.map((product) => product.name).join(' ')} ${item.broughtBy}`.toLocaleLowerCase('tr-TR').includes(value);
            const matchesStatus = this.statusFilter === 'Tümü' || item.status === this.statusFilter;
            const matchesCustomer = this.customerFilter === 'Tümü' || item.customer === this.customerFilter;
            const createdDate = this.parseDate(item.createdAt);
            const daysAgo = createdDate ? Math.floor((now.getTime() - createdDate.getTime()) / 86400000) : Number.POSITIVE_INFINITY;
            const matchesDate = this.dateFilter === 'Tümü' || (this.dateFilter === 'Bugün' ? daysAgo === 0 : daysAgo >= 0 && daysAgo <= 7);
            return matchesSearch && matchesStatus && matchesCustomer && matchesDate;
        });
    }
    get customerOptions() {
        return ['Tümü', ...new Set(this.repairs.map((item) => item.customer))];
    }
    get openCount() {
        return this.repairs.filter((item) => item.status === 'Başladı').length;
    }
    get todayCount() {
        return this.repairs.filter((item) => item.createdAt.startsWith('20.09.2026')).length;
    }
    get totalLabor() {
        return this.repairs.filter((item) => item.status === 'Başladı').reduce((total, item) => total + this.laborTotal(item), 0);
    }
    laborTotal(repair: RepairRecord) {
        return repair.labor.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
    }
    productTotal(repair: RepairRecord) {
        return repair.products.reduce((total, item) => total + item.quantity, 0);
    }
    metalTotal(repair: RepairRecord) {
        return repair.preciousMetals.reduce((total, item) => total + item.grams, 0);
    }
    filter(event: Event) {
        this.searchTerm = (event.target as HTMLInputElement).value;
    }
    private parseDate(value: string) {
        const [datePart, timePart] = value.split(' ');
        if (!datePart) return null;
        const [day, month, year] = datePart.split('.').map(Number);
        const [hour = 0, minute = 0] = (timePart ?? '').split(':').map(Number);
        return new Date(year, month - 1, day, hour, minute);
    }
    openNewPage() {
        this.router.navigate(['/repairs/new']);
    }
    edit(repair: RepairRecord) {
        this.editingId = repair.id;
        this.draft = { ...repair, products: repair.products.map((item) => ({ ...item })), labor: repair.labor.map((item) => ({ ...item })), preciousMetals: [...repair.preciousMetals] };
        this.dialogVisible = true;
    }
    complete(repair: RepairRecord) {
        this.repairState.update({ ...repair, status: 'Tamamlandı' });
    }
    private emptyRepair(): RepairRecord {
        return { id: 0, customer: '', broughtBy: '', products: [], description: '', labor: [], preciousMetals: [], status: 'Başladı', createdAt: '' };
    }
}
