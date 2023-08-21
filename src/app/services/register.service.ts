import { Injectable } from '@angular/core';
import { PartnerVerejnehoSektora } from '../models/PartnerVerejnehoSektora';
import { Observable, catchError, concatMap, map, reduce, retry, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { KonecnyUzivatelVyhod } from '../models/KonecnyUzivatelVyhod';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly API = environment.apiUrl;
  private readonly PartneriVerejnehoSektora = '/PartneriVerejnehoSektora';
  private readonly Partneri = '/Partneri';

  constructor(private http: HttpClient) {}

  vyhladatPartnerovVS(ico: string) {
    return this.ziskajPartnerovVerejnehoSektora(ico)
      .pipe(
        switchMap((partneriVS: any) => {
          return partneriVS;
        }),
        concatMap((partnerVS: any) =>
          this.ziskajKonecnychUzivatelovVyhod(partnerVS.partner.id).pipe(
            map((konecnyUV: any) => {
              partnerVS.partner.konecniUzivateliaVyhod = konecnyUV;
              return partnerVS;
            })
          )
        )
      )
      .pipe(reduce((partneriVS: any, partnerVS: any) => [...partneriVS, partnerVS], []));
  }

  private ziskajPartnerovVerejnehoSektora(ico: string): Observable<PartnerVerejnehoSektora[]> {
    return this.http
      .get<PartnerVerejnehoSektora[]>(
        this.API +
          this.PartneriVerejnehoSektora +
          `?$filter=Ico%20eq%20'` +
          ico +
          `'&$expand=Adresa($expand=Stat)%2CPartner`
      )
      .pipe(
        retry(2),
        catchError((err) => this.handleError(err)),

        map((response: any) => {
          return response.value;
        }),

        map((response: any) => {
          return response.map((partnerVS: any) => {
            return {
              id: partnerVS.Id,
              meno: partnerVS.Meno,
              priezvisko: partnerVS.Priezvisko,
              datumNarodenia: partnerVS.DatumNarodenia,
              titulPred: partnerVS.TitulPred,
              titulZa: partnerVS.TitulZa,
              obchodneMeno: partnerVS.ObchodneMeno,
              ico: partnerVS.Ico,
              formaOsoby: partnerVS.FormaOsoby,
              platnostOd: partnerVS.PlatnostOd,
              platnostDo: partnerVS.PlatnostDo,
              partner: {
                id: partnerVS.Partner.Id,
                cisloVlozky: partnerVS.Partner.CisloVlozky,
              },
              adresa: {
                id: partnerVS.Adresa.Id,
                menoUlice: partnerVS.Adresa.MenoUlice,
                orientacneCislo: partnerVS.Adresa.OrientacneCislo,
                supisneCislo: partnerVS.Adresa.SupisneCislo,
                mesto: partnerVS.Adresa.Mesto,
                mestoKod: partnerVS.Adresa.MestoKod,
                psc: partnerVS.Adresa.Psc,
                stat: {
                  id: partnerVS.Adresa.Stat.Id,
                  meno: partnerVS.Adresa.Stat.Meno,
                  statistickyKod: partnerVS.Adresa.Stat.StatistickyKod,
                  platnostOd: partnerVS.Adresa.Stat.PlatnostOd,
                  platnostDo: partnerVS.Adresa.Stat.PlatnostDo,
                },
              },
            } as PartnerVerejnehoSektora;
          });
        })
      );
  }

  private ziskajKonecnychUzivatelovVyhod(partnerId: number): Observable<KonecnyUzivatelVyhod[]> {
    return this.http
      .get<KonecnyUzivatelVyhod[]>(this.API + this.Partneri + '(' + partnerId + ')?$expand=KonecniUzivateliaVyhod')
      .pipe(
        catchError((err) => this.handleError(err)),
        map((response: any) => response.KonecniUzivateliaVyhod),
        map((konecnyUzivateliaV: any) => {
          return konecnyUzivateliaV.map(
            (konecnyUV: any) =>
              ({
                id: konecnyUV.Id,
                meno: konecnyUV.Meno,
                priezvisko: konecnyUV.Priezvisko,
                datumNarodenia: konecnyUV.DatumNarodenia,
                titulPred: konecnyUV.TitulPred,
                titulZa: konecnyUV.TitulZa,
                jeVerejnyCinitel: konecnyUV.JeVerejnyCinitel,
                obchodneMeno: konecnyUV.ObchodneMeno,
                ico: konecnyUV.Ico,
                platnostOd: konecnyUV.PlatnostOd,
                platnostDo: konecnyUV.PlatnostDo,
              } as KonecnyUzivatelVyhod)
          );
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Backend returned code ${error.status}, Message: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
function tab(arg0: void): import('rxjs').OperatorFunction<unknown, any> {
  throw new Error('Function not implemented.');
}
