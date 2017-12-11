import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceConfigurationComponent } from './device-configuration.component';

describe('DeviceConfigurationRouteModule', () => {
  let component: DeviceConfigurationComponent;
  let fixture: ComponentFixture<DeviceConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
