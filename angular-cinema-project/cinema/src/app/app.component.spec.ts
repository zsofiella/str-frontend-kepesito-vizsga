import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, MovieComponent, MovieListComponent, MovieDetailsComponent
      ],
      imports: [
        HttpClientModule, ReactiveFormsModule, FormsModule
      ]
    }).overrideComponent(MovieDetailsComponent, {set: {changeDetection: ChangeDetectionStrategy.Default}}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Létre kell jönni az app-kompnensnek', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    expect(app).toBeTruthy();
  });

  it('A kategória választó gomboknál kattintáskor meg kell hívódni a selectCategory metódusnak', ()=> {
    const mockSelectFunction = spyOn(component, 'selectCategory');

    const compiledComponent = fixture.debugElement.nativeElement;
    const actionButton: HTMLButtonElement = compiledComponent.querySelector('#action-button');
    console.log(actionButton);

    actionButton.click();
    expect(mockSelectFunction).toHaveBeenCalled();
    expect(mockSelectFunction).toHaveBeenCalledTimes(1);
  });

  it('Az Action kategória választó gombnál kattintásra meg kell változnia a kártya elemnek', ()=> {
    fixture.detectChanges(); // Kell ez??
    const compiledComponent = fixture.debugElement.nativeElement;

    const h3Element: HTMLHeadingElement = compiledComponent.querySelector('h3');
    const pElement: HTMLParagraphElement = compiledComponent.querySelector('p');
    const imgageElement: HTMLImageElement = compiledComponent.querySelector('img');

    expect(h3Element).toBeTruthy();
    expect(h3Element.innerHTML).toBe('Csillagok között');

    const actionButton: HTMLButtonElement = compiledComponent.querySelector('#action-button');
    expect(actionButton).toBeTruthy();

    actionButton.click();
    fixture.detectChanges();

    expect(h3Element.innerHTML).toBe('Top Gun');
    expect(pElement.innerHTML).toBe('1990');
    expect(imgageElement.src).toBe('https://images.unsplash.com/photo-1551796880-ddd03f861ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80');
  })

});
