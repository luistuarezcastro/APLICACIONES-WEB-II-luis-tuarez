import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pacientesComponent } from './pacientes.component';

describe('pacientesComponent', () => {
  let component: pacientesComponent;
  let fixture: ComponentFixture<pacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(pacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
