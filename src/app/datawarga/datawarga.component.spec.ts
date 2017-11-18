import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatawargaComponent } from './datawarga.component';

describe('DatawargaComponent', () => {
  let component: DatawargaComponent;
  let fixture: ComponentFixture<DatawargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatawargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatawargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
