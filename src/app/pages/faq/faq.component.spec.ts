import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqComponent } from './faq.component';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the faq component', () => {
    const fixture = TestBed.createComponent(FaqComponent);
    const faq = fixture.componentInstance;
    expect(faq).toBeTruthy();
  });

  it('should render the faq component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ngb-accordion')).toBeTruthy();
  });
});
