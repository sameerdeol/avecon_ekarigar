import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoworkerTravelDetailsPage } from './coworker-travel-details.page';

describe('CoworkerTravelDetailsPage', () => {
  let component: CoworkerTravelDetailsPage;
  let fixture: ComponentFixture<CoworkerTravelDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkerTravelDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
