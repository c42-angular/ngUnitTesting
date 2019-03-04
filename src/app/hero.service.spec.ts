import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MessageService } from './message.service';
import { HeroService } from './hero.service';

describe('Hero Service', () => {
  let mockMessageService;
  // let httpTestingController: HttpTestingController;
  // let service: HeroService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HeroService,
        { provide: MessageService, useValue: mockMessageService }
      ]
    });

    // httpTestingController = TestBed.get(HttpTestingController); // getting handle to a service in test module
    // service = TestBed.get(HeroService);
  });

  describe('getHeroes', () => {
    it('should call with the correct URL', inject([HttpTestingController, HeroService],
      (httpTestingController: HttpTestingController, service: HeroService) => {
      service.getHero(4).subscribe();
      // service.getHero(2).subscribe();

      // tell http test client what to return for the observable subscribe() set up above
      // and set expectation on the URI being requested at least once
      const req = httpTestingController.expectOne('api/heroes/4');
      req.flush({ id: 4, name: 'SuperDude', strength: 100 });

      httpTestingController.verify(); // this makes sure the client is called only once
    }));
  });
});
