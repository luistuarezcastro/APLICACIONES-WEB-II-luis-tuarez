import { TestBed } from '@angular/core/testing';

import { pacientesService } from './pacientes.service';

describe('pacientesService', () => {
  let service: pacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
