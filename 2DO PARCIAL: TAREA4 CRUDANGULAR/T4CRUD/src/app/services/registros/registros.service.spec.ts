import { TestBed } from '@angular/core/testing';

import { registrosService } from './registros.service';

describe('registrosService', () => {
  let service: registrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(registrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
