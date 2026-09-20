import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { RepairLabor, RepairMetal, RepairRecord, RepairStateService } from './repair-state.service';

@Component({
    selector: 'app-repair-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, TableModule],
    templateUrl: './repair-dialog.html'
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

    constructor(private readonly repairState: RepairStateService) {
        this.customerOptions = repairState.customerOptions;
        this.userOptions = repairState.userOptions;
        this.productOptions = repairState.productOptions;
        this.labors = repairState.labors;
        this.metalTypes = repairState.metalTypes;
    }

    laborTotal(repair: RepairRecord) {
        return repair.labor.reduce((total, item) => total + item.price, 0);
    }

    metalTotal(repair: RepairRecord) {
        return repair.preciousMetals.reduce((total, item) => total + item.grams, 0);
    }

    hasLabor(labor: RepairLabor) {
        return this.draft.labor.some((item) => item.id === labor.id);
    }

    addLabor(labor: RepairLabor) {
        if (this.draft.status === 'Tamamlandı') return;
        this.draft.labor = this.hasLabor(labor) ? this.draft.labor.filter((item) => item.id !== labor.id) : [...this.draft.labor, labor];
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

    save() {
        if (!this.draft.customer.trim() || !this.draft.broughtBy.trim() || !this.draft.product.trim()) return;
        this.saveRepair.emit(this.draft);
    }
}
