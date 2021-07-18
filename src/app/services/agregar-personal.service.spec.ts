import { TestBed } from '@angular/core/testing';

import { AgregarPersonalService } from './agregar-personal.service';

describe('AgregarPersonalService', () => {
  let service: AgregarPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
