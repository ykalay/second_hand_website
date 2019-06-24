import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanUniqueComponent } from './ilan-unique.component';

describe('IlanUniqueComponent', () => {
  let component: IlanUniqueComponent;
  let fixture: ComponentFixture<IlanUniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlanUniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
