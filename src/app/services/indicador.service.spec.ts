import { TestBed } from '@angular/core/testing';

import { IndicadorService } from './indicador.service';

describe('IndicadorServiceService', () => {
  let service: IndicadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
