import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatarwComponent } from './datarw.component';

describe('DatarwComponent', () => {
  let component: DatarwComponent;
  let fixture: ComponentFixture<DatarwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatarwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatarwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
