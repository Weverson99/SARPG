import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelajogadorPage } from './telajogador.page';

describe('TelajogadorPage', () => {
  let component: TelajogadorPage;
  let fixture: ComponentFixture<TelajogadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelajogadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelajogadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
