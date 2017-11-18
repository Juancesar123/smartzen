import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporankaskeluarComponent } from './laporankaskeluar.component';

describe('LaporankaskeluarComponent', () => {
  let component: LaporankaskeluarComponent;
  let fixture: ComponentFixture<LaporankaskeluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporankaskeluarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporankaskeluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
