import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelDetailsHelpPage } from './travel-details-help.page';

describe('TravelDetailsHelpPage', () => {
  let component: TravelDetailsHelpPage;
  let fixture: ComponentFixture<TravelDetailsHelpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDetailsHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
