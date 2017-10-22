import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStepBtnComponent } from './add-step-btn.component';

describe('AddStepBtnComponent', () => {
  let component: AddStepBtnComponent;
  let fixture: ComponentFixture<AddStepBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStepBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStepBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
