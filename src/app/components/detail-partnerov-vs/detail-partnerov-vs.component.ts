import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { PartnerVerejnehoSektora } from 'src/app/models/PartnerVerejnehoSektora';

@Component({
  selector: 'app-detail-partnerov-vs',
  templateUrl: './detail-partnerov-vs.component.html',
  styleUrls: ['./detail-partnerov-vs.component.scss'],
})
export class DetailPartnerovVsComponent {
  partneriVerejnehoSektora$: Observable<PartnerVerejnehoSektora[] | undefined>;
  showExpiredData = false;

  constructor(private router: Router, private store: Store<{ register: any }>) {
    this.partneriVerejnehoSektora$ = this.store.pipe(
      select('register'),
      map((data) => {
        if (data) {
          return Object.values(data);
        }
        setTimeout(() => this.router.navigate(['search']), 3000);
        return undefined;
      })
    );
  }
}
