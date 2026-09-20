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

@Component({
    selector: 'app-repair',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, TableModule, TagModule, RepairDialog],
    templateUrl: './repair.html'
})
export class Repair {
    searchTerm = '';
    dialogVisible = false;
    editingId: number | null = null;
    draft: RepairRecord = this.emptyRepair();

    constructor(private repairState: RepairStateService) {}

    get repairs() { return this.repairState.records(); }
    get visibleRepairs() {
        const value = this.searchTerm.toLocaleLowerCase('tr-TR');
        return this.repairs.filter((item) => `${item.customer} ${item.product} ${item.broughtBy}`.toLocaleLowerCase('tr-TR').includes(value));
    }
    get openCount() { return this.repairs.filter((item) => item.status === 'Başladı').length; }
    get todayCount() { return this.repairs.filter((item) => item.createdAt.startsWith('20.09.2026')).length; }
    get totalLabor() { return this.repairs.filter((item) => item.status === 'Başladı').reduce((total, item) => total + this.laborTotal(item), 0); }
    laborTotal(repair: RepairRecord) { return repair.labor.reduce((total, item) => total + item.price, 0); }
    metalTotal(repair: RepairRecord) { return repair.preciousMetals.reduce((total, item) => total + item.grams, 0); }
    filter(event: Event) { this.searchTerm = (event.target as HTMLInputElement).value; }
    openNew() { this.editingId = null; this.draft = this.emptyRepair(); this.dialogVisible = true; }
    edit(repair: RepairRecord) { this.editingId = repair.id; this.draft = { ...repair, labor: [...repair.labor], preciousMetals: [...repair.preciousMetals] }; this.dialogVisible = true; }
    saveRepair(record: RepairRecord) {
        if (!this.draft.customer.trim() || !this.draft.broughtBy.trim() || !this.draft.product.trim()) return;
        this.repairState.add({ ...record, id: Date.now(), status: 'Başladı', createdAt: '20.09.2026 ' + new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }) });
        this.dialogVisible = false;
    }
    complete(repair: RepairRecord) { this.repairState.update({ ...repair, status: 'Tamamlandı' }); }
    private emptyRepair(): RepairRecord { return { id: 0, customer: '', broughtBy: '', product: '', description: '', labor: [], preciousMetals: [], status: 'Başladı', createdAt: '' }; }
}
