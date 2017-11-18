import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatakecamatanComponent } from './datakecamatan.component';

describe('DatakecamatanComponent', () => {
  let component: DatakecamatanComponent;
  let fixture: ComponentFixture<DatakecamatanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatakecamatanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatakecamatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
