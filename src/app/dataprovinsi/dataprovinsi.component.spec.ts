import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataprovinsiComponent } from './dataprovinsi.component';

describe('DataprovinsiComponent', () => {
  let component: DataprovinsiComponent;
  let fixture: ComponentFixture<DataprovinsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataprovinsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataprovinsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
