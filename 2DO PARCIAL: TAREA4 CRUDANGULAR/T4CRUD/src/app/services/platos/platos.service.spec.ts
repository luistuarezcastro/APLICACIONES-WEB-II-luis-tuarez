import { TestBed } from '@angular/core/testing';

import { platosService } from './platos.service';

describe('TipoejerciciosService', () => {
  let service: platosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(platosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
