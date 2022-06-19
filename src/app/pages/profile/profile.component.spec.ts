import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the profile component', () => {
    const fixture = TestBed.createComponent(ProfileComponent);
    const profile = fixture.componentInstance;
    expect(profile).toBeTruthy();
  });

  it('should render the profile component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div')).toBeTruthy();
  });
});
