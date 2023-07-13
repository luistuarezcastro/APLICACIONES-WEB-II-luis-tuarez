import { ComponentFixture, TestBed } from '@angular/core/testing';

import { platosComponent } from './platos.component';

describe('platosComponent', () => {
  let component: platosComponent;
  let fixture: ComponentFixture<platosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ platosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(platosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
