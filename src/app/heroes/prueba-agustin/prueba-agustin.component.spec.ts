import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAgustinComponent } from './prueba-agustin.component';

describe('PruebaAgustinComponent', () => {
  let component: PruebaAgustinComponent;
  let fixture: ComponentFixture<PruebaAgustinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaAgustinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAgustinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
