import { TestBed } from '@angular/core/testing';

import { HttpRemoteService } from './http-remote.service';

describe('HttpRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpRemoteService = TestBed.get(HttpRemoteService);
    expect(service).toBeTruthy();
  });
});
