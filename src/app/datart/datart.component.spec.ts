import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatartComponent } from './datart.component';

describe('DatartComponent', () => {
  let component: DatartComponent;
  let fixture: ComponentFixture<DatartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
