import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaacaraComponent } from './beritaacara.component';

describe('BeritaacaraComponent', () => {
  let component: BeritaacaraComponent;
  let fixture: ComponentFixture<BeritaacaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeritaacaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeritaacaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
