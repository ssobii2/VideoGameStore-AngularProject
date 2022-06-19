import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to add an item to the cart', () => {
    service.addToCart('test');
    expect(service.getProductData().length).toBe(1);
  });

  it('should be able to get the total amount', () => {
    service.addToCart('test');
    expect(service.getTotalAmount());
  });
});
