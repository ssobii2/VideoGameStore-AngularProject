import { TestBed } from '@angular/core/testing';

import { AlertifyService } from './alertify.service';

describe('AlertifyService', () => {
  let service: AlertifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to create an alert', () => {
    service.success('success');
  });

  it('should be able to create an error', () => {
    service.error('error');
  });

  it('should be able to create a warning', () => {
    service.warning('warning');
  });
});
