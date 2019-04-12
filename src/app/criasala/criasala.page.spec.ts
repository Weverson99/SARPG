import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriasalaPage } from './criasala.page';

describe('CriasalaPage', () => {
  let component: CriasalaPage;
  let fixture: ComponentFixture<CriasalaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriasalaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriasalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
