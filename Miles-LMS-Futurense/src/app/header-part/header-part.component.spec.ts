import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPartComponent } from './header-part.component';

describe('HeaderPartComponent', () => {
  let component: HeaderPartComponent;
  let fixture: ComponentFixture<HeaderPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
