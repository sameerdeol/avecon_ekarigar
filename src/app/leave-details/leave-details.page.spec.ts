import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveDetailsPage } from './leave-details.page';

describe('LeaveDetailsPage', () => {
  let component: LeaveDetailsPage;
  let fixture: ComponentFixture<LeaveDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
