import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UilanComponent } from './uilan.component';

describe('UilanComponent', () => {
  let component: UilanComponent;
  let fixture: ComponentFixture<UilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
