/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AyurvedhaComponent } from './ayurvedha.component';

describe('AyurvedhaComponent', () => {
  let component: AyurvedhaComponent;
  let fixture: ComponentFixture<AyurvedhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyurvedhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurvedhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
