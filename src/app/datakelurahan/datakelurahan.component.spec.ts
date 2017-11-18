import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatakelurahanComponent } from './datakelurahan.component';

describe('DatakelurahanComponent', () => {
  let component: DatakelurahanComponent;
  let fixture: ComponentFixture<DatakelurahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatakelurahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatakelurahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
