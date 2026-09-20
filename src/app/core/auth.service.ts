import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly storageKey = 'yurekli-crm-authenticated';
    readonly isAuthenticated = signal(this.hasStoredSession());

    login(email: string, password: string, rememberMe: boolean): boolean {
        const valid = email.trim().toLocaleLowerCase('tr-TR') === 'demo@crm.local' && password === 'demo0';
        if (!valid) {
            return false;
        }

        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem(this.storageKey, 'true');
        if (rememberMe) {
            sessionStorage.removeItem(this.storageKey);
        } else {
            localStorage.removeItem(this.storageKey);
        }
        this.isAuthenticated.set(true);
        return true;
    }

    logout(): void {
        localStorage.removeItem(this.storageKey);
        sessionStorage.removeItem(this.storageKey);
        this.isAuthenticated.set(false);
    }

    private hasStoredSession(): boolean {
        return localStorage.getItem(this.storageKey) === 'true' || sessionStorage.getItem(this.storageKey) === 'true';
    }
}
