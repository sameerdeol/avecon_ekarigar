import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelExpenseDownloadPage } from './travel-expense-download.page';

describe('TravelExpenseDownloadPage', () => {
  let component: TravelExpenseDownloadPage;
  let fixture: ComponentFixture<TravelExpenseDownloadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelExpenseDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
