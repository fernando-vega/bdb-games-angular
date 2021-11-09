import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlatformsService } from './platforms.service';

describe('PlatformsService', () => {
  let service: PlatformsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PlatformsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
