import { TestBed } from '@angular/core/testing';

import { OportunidadesAllService } from './oportunidades-all.service';

describe('OportunidadesAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OportunidadesAllService = TestBed.get(OportunidadesAllService);
    expect(service).toBeTruthy();
  });
});
