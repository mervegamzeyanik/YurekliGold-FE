import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `,
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'CRM',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Müşteriler', icon: 'pi pi-fw pi-building', routerLink: ['/customers'] },
                    { label: 'Kullanıcılar', icon: 'pi pi-fw pi-users', routerLink: ['/users'] },
                    { label: 'Tamir İşlemleri', icon: 'pi pi-fw pi-wrench', routerLink: ['/repairs'] }
                ]
            },
            {
                label: 'Kuyumcu Tanımları',
                items: [
                    { label: 'İşçilik Tanımları', icon: 'pi pi-fw pi-money-bill', routerLink: ['/labors'] }
                ]
            }
        ];
    }
}
