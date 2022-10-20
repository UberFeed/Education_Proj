import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBasicsComponent } from './html-basics.component';

describe('HtmlBasicsComponent', () => {
  let component: HtmlBasicsComponent;
  let fixture: ComponentFixture<HtmlBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
