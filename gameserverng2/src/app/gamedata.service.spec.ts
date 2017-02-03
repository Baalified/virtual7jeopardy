/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GamedataService } from './gamedata.service';

describe('GamedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamedataService]
    });
  });

  it('should ...', inject([GamedataService], (service: GamedataService) => {
    expect(service).toBeTruthy();
  }));
});
