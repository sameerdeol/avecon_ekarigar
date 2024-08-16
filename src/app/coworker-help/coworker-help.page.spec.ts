import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoworkerHelpPage } from './coworker-help.page';

describe('CoworkerHelpPage', () => {
  let component: CoworkerHelpPage;
  let fixture: ComponentFixture<CoworkerHelpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoworkerHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
