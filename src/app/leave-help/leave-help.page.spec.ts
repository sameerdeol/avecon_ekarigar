import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveHelpPage } from './leave-help.page';

describe('LeaveHelpPage', () => {
  let component: LeaveHelpPage;
  let fixture: ComponentFixture<LeaveHelpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
