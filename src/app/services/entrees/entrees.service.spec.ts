import { TestBed } from '@angular/core/testing';

import { EntreesService} from './entrees.service';

describe('EntreesService', () => {
  let service: EntreesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntreesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
