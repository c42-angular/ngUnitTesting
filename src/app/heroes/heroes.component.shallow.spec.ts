import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Heroes Component (Shallow tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 }
    ];

    // create testing module
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    // create the wrapped component geared for testing
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should get list of heroes', () => {

  });

});
