import {Country} from './country';
import {Grup} from './grup';
import {AktifPasif, Cinsiyet} from '../_enums';

export interface Yolcu {
  id: number;
  uetdsYolcuRefNo: number;
  uyrukUlke: Country;
  cinsiyet: Cinsiyet;
  tcKimlikPasaportNo: string;
  adi: string;
  soyadi: string;
  koltukNo: string;
  telefonNo: string;
  durum: AktifPasif;
  grup: Grup;
}

