import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddStepBtnComponent } from './add-step-btn.component';

describe('AddStepBtnComponent', () => {
  let component: AddStepBtnComponent;
  let fixture: ComponentFixture<AddStepBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
  it('shoud have Cancel button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.btn-danger').textContent).toContain('Cancel');
  });
});
