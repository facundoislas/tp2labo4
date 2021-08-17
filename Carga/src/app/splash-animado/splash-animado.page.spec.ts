import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashAnimadoPage } from './splash-animado.page';

describe('SplashAnimadoPage', () => {
  let component: SplashAnimadoPage;
  let fixture: ComponentFixture<SplashAnimadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashAnimadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashAnimadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
