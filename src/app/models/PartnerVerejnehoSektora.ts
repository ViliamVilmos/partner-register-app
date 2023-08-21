import { Partner } from './Partner';

export interface PartnerVerejnehoSektora {
  id: number;
  meno: string;
  priezvisko: string;
  datumNarodenia: string;
  titulPred: string;
  titulZa: string;
  obchodneMeno: string;
  ico: string;
  formaOsoby: string;
  platnostOd: string;
  platnostDo: string;
  partner: Partner;
  adresa: Adresa;
}

interface Adresa {
  id: number;
  menoUlice: string;
  orientacneCislo: string;
  supisneCislo: string;
  mesto: string;
  mestoKod: string;
  psc: string;
  stat: Stat;
}

interface Stat {
  id: 0;
  meno: string;
  statistickyKod: string;
  platnostOd: string;
  platnostDo: string;
}
