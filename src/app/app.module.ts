import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VyhladatPartneraVSComponent } from './components/vyhladat-partnera-vs/vyhladat-partnera-vs.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { createFormReducer } from './store/register/store/register.reducer';
import { DetailPartnerovVsComponent } from './components/detail-partnerov-vs/detail-partnerov-vs.component';

@NgModule({
  declarations: [AppComponent, VyhladatPartneraVSComponent, DetailPartnerovVsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ register: createFormReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
