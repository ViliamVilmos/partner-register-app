import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VyhladatPartneraVSComponent } from './components/vyhladat-partnera-vs/vyhladat-partnera-vs.component';
import { DetailPartnerovVsComponent } from './components/detail-partnerov-vs/detail-partnerov-vs.component';

const routes: Routes = [
  {
    path: 'search',
    component: VyhladatPartneraVSComponent,
  },
  {
    path: 'detail',
    component: DetailPartnerovVsComponent,
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
