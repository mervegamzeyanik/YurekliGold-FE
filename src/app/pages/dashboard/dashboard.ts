import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RepairDialog } from '../jewelry/repair-dialog';
import { RepairRecord, RepairStateService } from '../jewelry/repair-state.service';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, FormsModule, RouterModule, ButtonModule, RepairDialog],
    templateUrl: './dashboard.html'
})
export class Dashboard {
    repairDialogVisible = false;
    quickRepair: RepairRecord = this.emptyRepair();

    constructor(private repairState: RepairStateService) {}

    get repairs() {
        return this.repairState.records();
    }

    get pendingRepairs() {
        return this.repairs.filter((repair) => repair.status === 'Başladı');
    }

    get recentRepairs(): RepairRecord[] {
        return this.repairs.slice(0, 5);
    }

    startQuickRepair(draft: RepairRecord) {
        if (!draft.customer || !draft.broughtBy || !draft.products.length) {
            return;
        }

        const timestamp = Date.now();
        this.repairState.add({
            ...draft,
            id: timestamp,
            status: 'Başladı',
            createdAt: '20.09.2026 ' + new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
        });

        this.repairDialogVisible = false;
        this.quickRepair = this.emptyRepair();
    }

    private emptyRepair(): RepairRecord {
        return { id: 0, customer: '', broughtBy: '', products: [], description: '', labor: [], preciousMetals: [], status: 'Başladı', createdAt: '' };
    }
}
