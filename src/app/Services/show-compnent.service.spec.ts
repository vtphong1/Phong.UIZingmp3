import { TestBed } from '@angular/core/testing';

import { ShowCompnentService } from './show-compnent.service';

describe('ShowCompnentService', () => {
  let service: ShowCompnentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCompnentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
