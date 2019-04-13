import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriapersonaPage } from './criapersona.page';

describe('CriapersonaPage', () => {
  let component: CriapersonaPage;
  let fixture: ComponentFixture<CriapersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriapersonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriapersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
