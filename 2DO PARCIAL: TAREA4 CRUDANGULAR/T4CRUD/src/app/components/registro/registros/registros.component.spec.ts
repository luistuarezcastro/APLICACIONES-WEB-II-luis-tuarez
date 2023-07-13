import { ComponentFixture, TestBed } from '@angular/core/testing';

import { registrosComponent } from './registros.component';

describe('registrosComponent', () => {
  let component: registrosComponent;
  let fixture: ComponentFixture<registrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ registrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(registrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
