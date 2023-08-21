import { KonecnyUzivatelVyhod } from './KonecnyUzivatelVyhod';

export interface Partner {
  id: number;
  cisloVlozky: number;
  konecniUzivateliaVyhod: KonecnyUzivatelVyhod[];
}
