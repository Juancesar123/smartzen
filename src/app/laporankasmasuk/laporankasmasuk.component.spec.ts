import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporankasmasukComponent } from './laporankasmasuk.component';

describe('LaporankasmasukComponent', () => {
  let component: LaporankasmasukComponent;
  let fixture: ComponentFixture<LaporankasmasukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporankasmasukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporankasmasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
