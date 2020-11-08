import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptUnitComponent } from './prompt-unit.component';

describe('PromptUnitComponent', () => {
  let component: PromptUnitComponent;
  let fixture: ComponentFixture<PromptUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
