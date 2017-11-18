import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedcctvComponent } from './integratedcctv.component';

describe('IntegratedcctvComponent', () => {
  let component: IntegratedcctvComponent;
  let fixture: ComponentFixture<IntegratedcctvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegratedcctvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedcctvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
