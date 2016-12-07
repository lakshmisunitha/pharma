/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoctersComponent } from './docters.component';

describe('DoctersComponent', () => {
  let component: DoctersComponent;
  let fixture: ComponentFixture<DoctersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
