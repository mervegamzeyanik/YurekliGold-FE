import { Injectable, signal } from '@angular/core';

export interface RepairLabor { id: number; name: string; price: number; }
export interface RepairMetal { id: number; type: 'Altın' | 'Gümüş'; grams: number; }
export interface RepairRecord {
    id: number;
    customer: string;
    broughtBy: string;
    product: string;
    description: string;
    labor: RepairLabor[];
    preciousMetals: RepairMetal[];
    status: 'Başladı' | 'Tamamlandı';
    createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class RepairStateService {
    readonly customerOptions = ['ALİ ÖZCAN', 'ALTINKENT', 'ARZU PIRLANTA', 'ATASAY ARENA PARK', 'ATEŞ SARRAFİYE'];
    readonly userOptions = ['Demo Kullanıcı', 'Ayşe Karaca', 'Mehmet Can', 'Zeynep Arslan'];
    readonly productOptions = ['Altın yüzük', 'Altın bileklik', 'Altın kolye', 'Altın küpe', 'Gümüş yüzük', 'Gümüş bileklik', 'Gümüş kolye', 'Pırlanta yüzük', 'Pırlanta küpe', 'Çeyrek altın', 'Kolye ucu'];
    readonly metalTypes: Array<'Altın' | 'Gümüş'> = ['Altın', 'Gümüş'];
    readonly labors: RepairLabor[] = [
        { id: 1, name: 'Kaynak işçiliği', price: 350 }, { id: 2, name: 'Cila işçiliği', price: 250 },
        { id: 3, name: 'Taş takma işçiliği', price: 500 }, { id: 4, name: 'Ölçü küçültme', price: 300 },
        { id: 5, name: 'Ölçü büyütme', price: 350 }, { id: 6, name: 'Lehim işçiliği', price: 300 },
        { id: 7, name: 'Kilit değişimi', price: 275 }, { id: 8, name: 'Klips değişimi', price: 225 },
        { id: 9, name: 'Zincir tamiri', price: 325 }, { id: 10, name: 'Mıhlama işçiliği', price: 650 },
        { id: 11, name: 'Taş sökme işçiliği', price: 400 }, { id: 12, name: 'Taş parlatma', price: 300 },
        { id: 13, name: 'Yüzey düzeltme', price: 275 }, { id: 14, name: 'Kaplama işçiliği', price: 550 },
        { id: 15, name: 'İsim yazma', price: 450 }, { id: 16, name: 'Ürün temizleme', price: 150 },
        { id: 17, name: 'Bileklik kısaltma', price: 300 }, { id: 18, name: 'Kolye kısaltma', price: 325 },
        { id: 19, name: 'Küpe tamiri', price: 250 }, { id: 20, name: 'Ayar kontrolü', price: 200 }
    ];

    readonly records = signal<RepairRecord[]>([
        { id: 1001, customer: 'ALİ ÖZCAN', broughtBy: 'Ayşe Karaca', product: 'Altın bileklik', description: 'Kopuk zincir kaynak yapılacak', labor: [{ id: 1, name: 'Kaynak işçiliği', price: 350 }], preciousMetals: [{ id: 1, type: 'Altın', grams: 1.25 }], status: 'Başladı', createdAt: '20.09.2026 10:15' },
        { id: 1000, customer: 'ARZU PIRLANTA', broughtBy: 'Demo Kullanıcı', product: 'Pırlanta yüzük', description: 'Taş kontrolü ve cila', labor: [{ id: 2, name: 'Cila işçiliği', price: 250 }], preciousMetals: [], status: 'Tamamlandı', createdAt: '19.09.2026 14:40' },
        { id: 999, customer: 'ALTINKENT', broughtBy: 'Mehmet Can', product: 'Altın yüzük', description: '', labor: [{ id: 3, name: 'Taş takma işçiliği', price: 500 }], preciousMetals: [{ id: 2, type: 'Altın', grams: 0.85 }], status: 'Başladı', createdAt: '19.09.2026 11:25' },
        { id: 998, customer: 'ATASAY ARENA PARK', broughtBy: 'Ayşe Karaca', product: 'Gümüş kolye', description: '', labor: [{ id: 4, name: 'Ölçü küçültme', price: 300 }], preciousMetals: [], status: 'Başladı', createdAt: '18.09.2026 16:05' },
        { id: 997, customer: 'ATEŞ SARRAFİYE', broughtBy: 'Demo Kullanıcı', product: 'Altın küpe', description: '', labor: [{ id: 2, name: 'Cila işçiliği', price: 250 }, { id: 1, name: 'Kaynak işçiliği', price: 350 }], preciousMetals: [{ id: 3, type: 'Gümüş', grams: 2.4 }], status: 'Tamamlandı', createdAt: '18.09.2026 13:10' },
        { id: 996, customer: 'ALİ ÖZCAN', broughtBy: 'Mehmet Can', product: 'Kolye ucu', description: '', labor: [{ id: 1, name: 'Kaynak işçiliği', price: 350 }], preciousMetals: [], status: 'Başladı', createdAt: '17.09.2026 15:45' },
        { id: 995, customer: 'ARZU PIRLANTA', broughtBy: 'Ayşe Karaca', product: 'Pırlanta küpe', description: '', labor: [{ id: 3, name: 'Taş takma işçiliği', price: 500 }], preciousMetals: [], status: 'Tamamlandı', createdAt: '17.09.2026 09:30' }
    ]);

    add(record: RepairRecord) {
        this.records.update((records) => [record, ...records]);
    }

    update(record: RepairRecord) {
        this.records.update((records) => records.map((item) => item.id === record.id ? record : item));
    }
}
