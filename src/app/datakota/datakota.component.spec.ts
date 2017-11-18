import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatakotaComponent } from './datakota.component';

describe('DatakotaComponent', () => {
  let component: DatakotaComponent;
  let fixture: ComponentFixture<DatakotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatakotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatakotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
