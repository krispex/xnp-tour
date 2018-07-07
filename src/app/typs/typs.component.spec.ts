import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypsComponent } from './typs.component';

describe('TypsComponent', () => {
  let component: TypsComponent;
  let fixture: ComponentFixture<TypsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
