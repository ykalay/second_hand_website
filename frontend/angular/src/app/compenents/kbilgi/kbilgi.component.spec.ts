import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbilgiComponent } from './kbilgi.component';

describe('KbilgiComponent', () => {
  let component: KbilgiComponent;
  let fixture: ComponentFixture<KbilgiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbilgiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbilgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
