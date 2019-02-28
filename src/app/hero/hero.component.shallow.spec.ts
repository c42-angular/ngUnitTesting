import { HeroComponent } from './hero.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Hero Component (Shallow)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {

    // create a module for testing
    //   - a cut down version of the normal module but with only bits
    //    that need testing. Is also a wrapper around the module with testing specific
    //    functionality added.
    // this acts as the resolution context for directives etc
    TestBed.configureTestingModule({
      declarations: [ HeroComponent ],
      schemas: [ NO_ERRORS_SCHEMA ] // tells Angular to ignore any unknown directives & elements, in this case the routerLink
    });

    fixture = TestBed.createComponent(HeroComponent);
  });

  it('template should display name of hero that was set', () => {
    // get hold of the actual wrapped component
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
    fixture.detectChanges(); // force bind - in a normal run this will happen in automatic change detection

    // const neA = fixture.nativeElement.querySelector('a');
    // expect(neA.textContent).toContain('SuperDude');
    const deA = fixture.debugElement.query(By.css('a'));
    expect(deA.nativeElement.textContent).toContain('SuperDude');
  });

});
