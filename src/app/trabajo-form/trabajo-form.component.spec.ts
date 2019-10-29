import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoFormComponent } from './trabajo-form.component';

describe('TrabajoFormComponent', () => {
  let component: TrabajoFormComponent;
  let fixture: ComponentFixture<TrabajoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
