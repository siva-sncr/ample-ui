import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMonitoringComponent } from './line.monitoring.component';

describe('LineMonitoringRouteModule', () => {
  let component: LineMonitoringComponent;
  let fixture: ComponentFixture<LineMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
