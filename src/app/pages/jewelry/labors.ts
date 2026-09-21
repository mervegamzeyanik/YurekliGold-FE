import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

interface Labor {
    id: number;
    name: string;
    price: number;
    description: string;
}

@Component({
    selector: 'app-labors',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, InputNumberModule, InputTextModule, TableModule],
    templateUrl: './labors.html'
})
export class Labors {
    labors: Labor[] = [
        { id: 1, name: 'Kaynak işçiliği', price: 350, description: 'Kopuk veya kırık parça kaynağı' },
        { id: 2, name: 'Cila işçiliği', price: 250, description: 'Ürün yüzey parlatma' },
        { id: 3, name: 'Taş takma işçiliği', price: 500, description: 'Eksik taş montajı' },
        { id: 4, name: 'Lehim işçiliği', price: 300, description: 'Hassas bağlantı ve birleştirme' },
        { id: 5, name: 'Ölçü küçültme', price: 450, description: 'Yüzük ölçüsünü küçültme işlemi' },
        { id: 6, name: 'Ölçü büyütme', price: 550, description: 'Yüzük ölçüsünü büyütme işlemi' },
        { id: 7, name: 'Zincir onarımı', price: 280, description: 'Kopmuş zincir halkalarının onarımı' },
        { id: 8, name: 'Kilit değişimi', price: 220, description: 'Kolye veya bileklik kilit değişimi' }
    ];
    editingId: number | null = null;
    searchTerm = '';
    formError = '';
    draft: Labor = this.empty();

    get filteredLabors(): Labor[] {
        const query = this.searchTerm.trim().toLocaleLowerCase('tr-TR');
        return query ? this.labors.filter((labor) => `${labor.name} ${labor.description}`.toLocaleLowerCase('tr-TR').includes(query)) : this.labors;
    }

    get totalValue(): number {
        return this.labors.reduce((total, labor) => total + labor.price, 0);
    }
    get averagePrice(): number {
        return this.labors.length ? this.totalValue / this.labors.length : 0;
    }

    edit(labor: Labor) {
        this.editingId = labor.id;
        this.formError = '';
        this.draft = { ...labor };
    }

    save() {
        const name = this.draft.name.trim();
        if (!name) {
            this.formError = 'İşçilik adı zorunludur.';
            return;
        }
        if (!this.draft.price || this.draft.price <= 0) {
            this.formError = 'Geçerli bir tutar girin.';
            return;
        }
        const duplicate = this.labors.some((item) => item.id !== this.editingId && item.name.toLocaleLowerCase('tr-TR') === name.toLocaleLowerCase('tr-TR'));
        if (duplicate) {
            this.formError = 'Bu isimde bir işçilik zaten tanımlı.';
            return;
        }
        const labor = { ...this.draft, name, description: this.draft.description.trim() };
        this.labors = this.editingId === null ? [...this.labors, { ...labor, id: Date.now() }] : this.labors.map((item) => (item.id === this.editingId ? { ...labor, id: this.editingId } : item));
        this.reset();
    }

    remove(labor: Labor) {
        this.labors = this.labors.filter((item) => item.id !== labor.id);
        if (this.editingId === labor.id) this.reset();
    }
    reset() {
        this.editingId = null;
        this.formError = '';
        this.draft = this.empty();
    }
    private empty(): Labor {
        return { id: 0, name: '', price: 0, description: '' };
    }
}
