import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIlanComponent } from './new-ilan.component';

describe('NewIlanComponent', () => {
  let component: NewIlanComponent;
  let fixture: ComponentFixture<NewIlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
