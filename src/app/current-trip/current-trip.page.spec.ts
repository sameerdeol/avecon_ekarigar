import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentTripPage } from './current-trip.page';

describe('CurrentTripPage', () => {
  let component: CurrentTripPage;
  let fixture: ComponentFixture<CurrentTripPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
