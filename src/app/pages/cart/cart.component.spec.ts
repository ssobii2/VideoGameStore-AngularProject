import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the cart component', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const cart = fixture.componentInstance;
    expect(cart).toBeTruthy();
  });

  it('should render the cart table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div')).toBeTruthy();
  });
});
