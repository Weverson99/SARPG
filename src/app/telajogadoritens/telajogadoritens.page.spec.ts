import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelajogadoritensPage } from './telajogadoritens.page';

describe('TelajogadoritensPage', () => {
  let component: TelajogadoritensPage;
  let fixture: ComponentFixture<TelajogadoritensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelajogadoritensPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelajogadoritensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
