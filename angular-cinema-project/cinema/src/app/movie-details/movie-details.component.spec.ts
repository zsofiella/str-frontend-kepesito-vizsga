import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';

import { AppComponent } from '../app.component';
import { MovieDetailsComponent } from './movie-details.component';

describe('Movie-Details Komponens tesztjei', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  window.onbeforeunload = jasmine.createSpy();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, MovieDetailsComponent ]
    }).overrideComponent(MovieDetailsComponent, {set: {changeDetection: ChangeDetectionStrategy.Default}})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('A Movie-Details komponens létrejön', () => {
    expect(component).toBeTruthy();
  });

  it('Adatkötések tesztelése', ()=> {
    const compiledComponent = fixture.debugElement.nativeElement;

    const imgElement : HTMLImageElement = compiledComponent.querySelector('img');
    const h3Element: HTMLHeadingElement = compiledComponent.querySelector('h3');
    const pElement: HTMLParagraphElement = compiledComponent.querySelector('p');
    
    expect(imgElement).toBeTruthy();
    expect(h3Element).toBeTruthy();
    expect(pElement).toBeTruthy();

    expect(imgElement.src).toBe('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1371&q=80');
    expect(h3Element.innerHTML).toBe('Csillagok között');
    expect(pElement.innerHTML).toBe('2009');
  });

  it('A chosenMovieCategory változása estén frissülnek az HTML elemek megjelenítése', ()=> {
    const compiledComponent = fixture.debugElement.nativeElement;

    const imgElement : HTMLImageElement = compiledComponent.querySelector('img');
    const h3Element: HTMLHeadingElement = compiledComponent.querySelector('h3');
    const pElement: HTMLParagraphElement = compiledComponent.querySelector('p'); 

    component.chosenMovieCategory = {title: 'Top Gun', year: 1990, Category: 'Action', imgUrl: 'https://images.unsplash.com/photo-1551796880-ddd03f861ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80'},
    fixture.detectChanges();

    expect(imgElement.src).toBe('https://images.unsplash.com/photo-1551796880-ddd03f861ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80');
    expect(h3Element.innerHTML).toBe('Top Gun');
    expect(pElement.innerHTML).toBe('1990');
  });

  it('A Detail kártya CSS tartalmának ellenőrzése', ()=> {
    const compiledComponent = fixture.debugElement.nativeElement;

    const cardElement: HTMLElement = compiledComponent.querySelector('.card');
    const cardStyle = window.getComputedStyle(cardElement);

    expect(cardStyle.width).toBe('650px');
    expect(cardStyle.backgroundColor).toBe('rgb(73, 73, 65)');
  });

  it('A kép, H3, P elem CSS szabályainak ellenőrzése', ()=> {
    const compiledComponent = fixture.debugElement.nativeElement;

    const imgElement: HTMLImageElement = compiledComponent.querySelector('img');
    const h3Element: HTMLHeadingElement = compiledComponent.querySelector('h3');
    const pElement: HTMLParagraphElement = compiledComponent.querySelector('p');

    const imgStyle = window.getComputedStyle(imgElement);
    const h3ElementStyle = window.getComputedStyle(h3Element);
    const pElementStyle = window.getComputedStyle(pElement);

    expect(h3ElementStyle.color).toBe('rgb(214, 176, 106)');
    expect(h3ElementStyle.textAlign).toBe('center');

    expect(pElementStyle.color).toBe('rgb(214, 176, 106)');
    expect(pElementStyle.textAlign).toBe('center');
  })
});

