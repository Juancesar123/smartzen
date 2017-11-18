import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarkeluhanComponent } from './daftarkeluhan.component';

describe('DaftarkeluhanComponent', () => {
  let component: DaftarkeluhanComponent;
  let fixture: ComponentFixture<DaftarkeluhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarkeluhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarkeluhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
