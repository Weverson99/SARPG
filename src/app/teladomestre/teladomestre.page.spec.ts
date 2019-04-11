import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeladomestrePage } from './teladomestre.page';

describe('TeladomestrePage', () => {
  let component: TeladomestrePage;
  let fixture: ComponentFixture<TeladomestrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeladomestrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeladomestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
