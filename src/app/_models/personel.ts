import {Country} from './country';
import {Sefer} from './sefer';
import {Cinsiyet, PersonelTuru} from '../_enums';

export interface Personel {
  id: number;
  turKodu: PersonelTuru;
  uyrukUlke: Country;
  tcKimlikPasaportNo: string;
  cinsiyet: Cinsiyet;
  adi: string;
  soyadi: string;
  telefon: string;
  adres: string;
  sefer: Sefer;
}

