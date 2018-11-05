import {Country} from './country';
import {Grup} from './grup';

export interface Yolcu {
  id: number;
  uetdsYolcuRefNo: string;
  uyrukUlke: Country;
  cinsiyet: string;
  tcKimlikPasaportNo: string;
  adi: string;
  soyadi: string;
  koltukNo: string;
  telefonNo: string;
  durum: string;
  grup: Grup;
}

