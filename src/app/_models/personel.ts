import {Country} from './country';
import {Sefer} from './sefer';

export interface Personel {
  id: number;
  turKodu: string;
  uyrukUlke: Country;
  tcKimlikPasaportNo: string;
  cinsiyet: string;
  adi: string;
  soyadi: string;
  telefon: string;
  adres: string;
  sefer: Sefer;
}

