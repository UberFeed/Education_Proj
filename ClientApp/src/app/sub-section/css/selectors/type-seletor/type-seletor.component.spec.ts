import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSeletorComponent } from './type-seletor.component';

describe('TypeSeletorComponent', () => {
  let component: TypeSeletorComponent;
  let fixture: ComponentFixture<TypeSeletorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeSeletorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSeletorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
