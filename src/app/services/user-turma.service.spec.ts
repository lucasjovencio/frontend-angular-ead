import { TestBed } from '@angular/core/testing';

import { UserTurmaService } from './user-turma.service';

describe('UserTurmaService', () => {
  let service: UserTurmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTurmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
