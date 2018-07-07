import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypsComponentComponent } from './typs-component.component';

describe('TypsComponentComponent', () => {
  let component: TypsComponentComponent;
  let fixture: ComponentFixture<TypsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
