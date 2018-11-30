import { TestBed } from '@angular/core/testing';

import { JsonredService } from './jsonred.service';

describe('JsonredService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonredService = TestBed.get(JsonredService);
    expect(service).toBeTruthy();
  });
});
