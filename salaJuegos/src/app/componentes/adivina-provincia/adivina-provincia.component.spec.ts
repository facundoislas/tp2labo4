import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaProvinciaComponent } from './adivina-provincia.component';

describe('AdivinaProvinciaComponent', () => {
  let component: AdivinaProvinciaComponent;
  let fixture: ComponentFixture<AdivinaProvinciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaProvinciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
