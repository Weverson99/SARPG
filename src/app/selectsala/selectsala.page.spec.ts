import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsalaPage } from './selectsala.page';

describe('SelectsalaPage', () => {
  let component: SelectsalaPage;
  let fixture: ComponentFixture<SelectsalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectsalaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectsalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
