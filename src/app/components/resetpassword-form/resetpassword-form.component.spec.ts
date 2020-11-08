import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordFormComponent } from './resetpassword-form.component';

describe('ResetpasswordFormComponent', () => {
  let component: ResetpasswordFormComponent;
  let fixture: ComponentFixture<ResetpasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
