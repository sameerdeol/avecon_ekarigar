import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelDetailDataPage } from './travel-detail-data.page';

describe('TravelDetailDataPage', () => {
  let component: TravelDetailDataPage;
  let fixture: ComponentFixture<TravelDetailDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDetailDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
