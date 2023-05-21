import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginSignupComponent } from './adminlogin-signup.component';

describe('AdminloginSignupComponent', () => {
  let component: AdminloginSignupComponent;
  let fixture: ComponentFixture<AdminloginSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminloginSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminloginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
