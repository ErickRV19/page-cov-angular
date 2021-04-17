import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIngresarComponent } from './form-ingresar.component';

describe('FormIngresarComponent', () => {
  let component: FormIngresarComponent;
  let fixture: ComponentFixture<FormIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIngresarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
