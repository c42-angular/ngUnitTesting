import { HeroComponent } from './hero.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('Hero Component (Shallow)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {

    // create a module for testing
    //   - a cut down version of the normal module but with only bits
    //    that need testing. Is also a wrapper around the module with testing specific
    //    functionality added.
    // this acts as the resolution context for directives etc
    TestBed.configureTestingModule({
      declarations: [ HeroComponent ]
    });

    fixture = TestBed.createComponent(HeroComponent);
  });

  it('template should display name of hero that was set', () => {
    // get hold of the actual wrapped component
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };

    const neA = fixture.nativeElement.querySelector('a');
    expect(neA.innerText).toContain('SuperDude');
  });

});
