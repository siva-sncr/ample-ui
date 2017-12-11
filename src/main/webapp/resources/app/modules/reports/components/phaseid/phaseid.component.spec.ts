import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseidComponent } from './phaseid.component';

describe('HeaderRouteModule', () => {
  let component: PhaseidComponent;
  let fixture: ComponentFixture<PhaseidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
