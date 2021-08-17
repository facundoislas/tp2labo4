import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPage } from './barra.page';

describe('BarraPage', () => {
  let component: BarraPage;
  let fixture: ComponentFixture<BarraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
