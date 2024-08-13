import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthExpenseDataPage } from './month-expense-data.page';

describe('MonthExpenseDataPage', () => {
  let component: MonthExpenseDataPage;
  let fixture: ComponentFixture<MonthExpenseDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthExpenseDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
