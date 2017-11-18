import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanwargaComponent } from './laporanwarga.component';

describe('LaporanwargaComponent', () => {
  let component: LaporanwargaComponent;
  let fixture: ComponentFixture<LaporanwargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporanwargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanwargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
