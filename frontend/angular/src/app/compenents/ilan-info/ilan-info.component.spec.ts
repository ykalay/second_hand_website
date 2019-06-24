import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanInfoComponent } from './ilan-info.component';

describe('IlanInfoComponent', () => {
  let component: IlanInfoComponent;
  let fixture: ComponentFixture<IlanInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlanInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
