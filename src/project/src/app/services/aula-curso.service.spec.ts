import { TestBed } from '@angular/core/testing';

import { AulaCursoService } from './aula-curso.service';

describe('AulaCursoService', () => {
  let service: AulaCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AulaCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
