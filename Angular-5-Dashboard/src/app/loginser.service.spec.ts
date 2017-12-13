import { TestBed, inject } from '@angular/core/testing';

import { LoginserService } from './loginser.service';

describe('LoginserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginserService]
    });
  });

  it('should be created', inject([LoginserService], (service: LoginserService) => {
    expect(service).toBeTruthy();
  }));
});
