import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyhladatPartneraVSComponent } from './vyhladat-partnera-vs.component';

describe('VyhladatPartneraVSComponent', () => {
  let component: VyhladatPartneraVSComponent;
  let fixture: ComponentFixture<VyhladatPartneraVSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VyhladatPartneraVSComponent]
    });
    fixture = TestBed.createComponent(VyhladatPartneraVSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
