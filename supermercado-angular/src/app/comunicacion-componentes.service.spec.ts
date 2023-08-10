import { TestBed } from '@angular/core/testing';

import { ComunicacionComponentesService } from './services/comunicacion-componentes.service';

describe('ComunicacionComponentesService', () => {
  let service: ComunicacionComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
