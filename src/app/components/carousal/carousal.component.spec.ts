import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalComponent } from './carousal.component';

describe('CarousalComponent', () => {
  let component: CarousalComponent;
  let fixture: ComponentFixture<CarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the carousal component', () => {
    const fixture = TestBed.createComponent(CarousalComponent);
    const carousal = fixture.componentInstance;
    expect(carousal).toBeTruthy();
  });

  it('should render the carousal component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ngb-carousel')).toBeTruthy();
  });
});
