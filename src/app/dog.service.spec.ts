import { TestBed } from '@angular/core/testing';

import { DogServices } from './dog.service';

describe('DogService', () => {
  let service: DogServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});