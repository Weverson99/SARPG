import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadpersonaPage } from './cadpersona.page';

describe('CadpersonaPage', () => {
  let component: CadpersonaPage;
  let fixture: ComponentFixture<CadpersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadpersonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadpersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
