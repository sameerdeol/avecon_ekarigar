import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelExpenseHelpPage } from './travel-expense-help.page';

describe('TravelExpenseHelpPage', () => {
  let component: TravelExpenseHelpPage;
  let fixture: ComponentFixture<TravelExpenseHelpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelExpenseHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
