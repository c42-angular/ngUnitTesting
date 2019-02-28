import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';

describe('Heroes Component (Shallow tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let HEROES;
  let mockHeroService;

  @Component({
    selector: 'app-hero',
    template: '<div></div>',
  })
  class FakeHeroComponent {
    @Input() hero;
    @Output() delete = new EventEmitter();
  }

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 }
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    // create testing module
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        FakeHeroComponent
      ],
      // removing this setting as this would hide any incorrect element declarations
      // originally we added to ignore child components
      // schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ]
    });

    // create the wrapped component geared for testing
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should get list of heroes', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges(); // runs change detection that also calls ngInit()

    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

  it('should create a li for each hero', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges(); // runs change detection that also calls ngInit()

    // check template that it has 3 li elements
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  });
});
