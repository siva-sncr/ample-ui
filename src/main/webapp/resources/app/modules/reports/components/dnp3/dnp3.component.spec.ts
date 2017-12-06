import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dnp3Component } from './dnp3.component';

describe('HeaderRouteModule', () => {
  let component: Dnp3Component;
  let fixture: ComponentFixture<Dnp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dnp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dnp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
