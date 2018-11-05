import {Sefer} from './sefer';
import {Country} from './country';
import {City} from './city';
import {District} from './district';

export interface Grup {
  id: number;
  uetdsGrupRefNo: string;
  grupAdi: string;
  grupAciklama: string;
  baslangicUlke: Country;
  baslangicIl: City;
  baslangicIlce: District;
  baslangicYer: string;
  bitisUlke: Country;
  bitisIl: City;
  bitisIlce: District;
  bitisYer: string;
  sefer: Sefer;
}

