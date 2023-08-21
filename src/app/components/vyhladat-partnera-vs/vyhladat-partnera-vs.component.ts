import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { PartnerVerejnehoSektora } from 'src/app/models/PartnerVerejnehoSektora';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as RegisterActions from '../../store/register/store/register.actions';

@Component({
  selector: 'app-vyhladat-partnera-vs',
  templateUrl: './vyhladat-partnera-vs.component.html',
  styleUrls: ['./vyhladat-partnera-vs.component.scss'],
})
export class VyhladatPartneraVSComponent {
  constructor(
    private registerService: RegisterService,
    private router: Router,
    private store: Store<{ register: PartnerVerejnehoSektora[] }>
  ) {}

  ico = new FormControl('', [Validators.required, Validators.pattern('^[0-9 ]+'), Validators.minLength(8)]);
  loading = false;

  vyhladatPartnerovVS() {
    if (this.ico.valid) {
      var ico = this.ico.value || '';
      ico = ico.replace(/\s/g, '');
      this.loading = true;
      this.registerService.vyhladatPartnerovVS(ico).subscribe((partneriVS: PartnerVerejnehoSektora[]) => {
        if (partneriVS.length > 0) {
          this.store.dispatch(new RegisterActions.Update(partneriVS));
          this.loading = false;
          this.router.navigate(['detail']);
        } else {
          this.store.dispatch(new RegisterActions.Update(partneriVS));
          this.loading = false;
          window.alert('Nenašli sa žiadne výsledky pre zadané IČO.');
        }
      });
    }
  }
}
