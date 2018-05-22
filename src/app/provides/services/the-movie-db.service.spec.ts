import { TestBed, inject } from '@angular/core/testing';

import { TheMovieDBService } from './the-movie-db.service';

describe('TheMovieDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheMovieDBService]
    });
  });

  it('should be created', inject([TheMovieDBService], (service: TheMovieDBService) => {
    expect(service).toBeTruthy();
  }));
});
