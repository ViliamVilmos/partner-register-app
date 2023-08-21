import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartnerovVsComponent } from './detail-partnerov-vs.component';

describe('DetailPartnerovVsComponent', () => {
  let component: DetailPartnerovVsComponent;
  let fixture: ComponentFixture<DetailPartnerovVsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPartnerovVsComponent]
    });
    fixture = TestBed.createComponent(DetailPartnerovVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
