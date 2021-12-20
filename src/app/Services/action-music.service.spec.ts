import { TestBed } from '@angular/core/testing';

import { ActionMusicService } from './action-music.service';

describe('ActionMusicService', () => {
  let service: ActionMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
