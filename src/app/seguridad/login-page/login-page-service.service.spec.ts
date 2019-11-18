import { TestBed } from '@angular/core/testing';

import { LoginPageServiceService } from './login-page-service.service';

describe('LoginPageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginPageServiceService = TestBed.get(LoginPageServiceService);
    expect(service).toBeTruthy();
  });
});
