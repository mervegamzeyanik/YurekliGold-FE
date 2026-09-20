import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    task: string;
    phone: string;
    status: 'Aktif' | 'Pasif';
    permissions: string[];
}

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, DialogModule, InputTextModule, SelectModule, TableModule, TagModule],
    templateUrl: './users.html'
})
export class Users {
    users: User[] = [
        { id: 1, name: 'Demo Kullanıcı', email: 'demo@crm.local', role: 'Yönetici', task: 'Mağaza Müdürü', phone: '0532 111 22 33', status: 'Aktif', permissions: ['Müşteri yönetimi', 'Tamir yönetimi', 'İşçilik tanımları', 'Raporlar'] },
        { id: 2, name: 'Ayşe Karaca', email: 'ayse@crm.local', role: 'Satış Uzmanı', task: 'Satış Danışmanı', phone: '0542 222 33 44', status: 'Aktif', permissions: ['Müşteri yönetimi', 'Tamir başlatma'] },
        { id: 3, name: 'Mehmet Can', email: 'mehmet@crm.local', role: 'Görüntüleyici', task: 'Stok Sorumlusu', phone: '0551 333 44 55', status: 'Pasif', permissions: ['Raporlar'] },
        { id: 4, name: 'Zeynep Arslan', email: 'zeynep@crm.local', role: 'Teknisyen', task: 'Takı Ustası', phone: '0533 444 55 66', status: 'Aktif', permissions: ['Tamir başlatma', 'Tamir tamamlama'] }
    ];
    filteredUsers = [...this.users];
    roles = ['Yönetici', 'Satış Uzmanı', 'Teknisyen', 'Görüntüleyici'];
    tasks = ['Mağaza Müdürü', 'Satış Danışmanı', 'Takı Ustası', 'Stok Sorumlusu', 'Kasa Sorumlusu', 'Muhasebe Sorumlusu'];
    statuses: Array<'Aktif' | 'Pasif'> = ['Aktif', 'Pasif'];
    availablePermissions = ['Müşteri yönetimi', 'Kullanıcı yönetimi', 'Tamir başlatma', 'Tamir tamamlama', 'İşçilik tanımları', 'Raporlar'];
    dialogVisible = false;
    editingId: number | null = null;
    draft: User = this.emptyUser();

    get activeCount() { return this.users.filter((user) => user.status === 'Aktif').length; }
    get adminCount() { return this.users.filter((user) => user.role === 'Yönetici').length; }
    filter(event: Event) { const value = (event.target as HTMLInputElement).value.toLocaleLowerCase('tr-TR'); this.filteredUsers = this.users.filter((user) => `${user.name} ${user.email} ${user.role} ${user.task}`.toLocaleLowerCase('tr-TR').includes(value)); }
    initials(name: string) { return name.split(' ').map((part) => part[0]).join('').slice(0, 2); }
    openNew() { this.editingId = null; this.draft = this.emptyUser(); this.dialogVisible = true; }
    edit(user: User) { this.editingId = user.id; this.draft = { ...user, permissions: [...user.permissions] }; this.dialogVisible = true; }
    save() {
        if (!this.draft.name.trim() || !this.draft.email.trim() || !this.draft.task.trim()) return;
        if (this.editingId === null) this.users = [...this.users, { ...this.draft, id: Date.now() }];
        else this.users = this.users.map((user) => user.id === this.editingId ? { ...this.draft, id: this.editingId } : user);
        this.filteredUsers = [...this.users]; this.dialogVisible = false;
    }
    remove(user: User) { this.users = this.users.filter((item) => item.id !== user.id); this.filteredUsers = this.filteredUsers.filter((item) => item.id !== user.id); }
    private emptyUser(): User { return { id: 0, name: '', email: '', role: 'Görüntüleyici', task: 'Satış Danışmanı', phone: '', status: 'Aktif', permissions: [] }; }
}
