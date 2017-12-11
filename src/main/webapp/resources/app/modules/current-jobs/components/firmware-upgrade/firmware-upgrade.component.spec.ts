import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareUpgradeComponent } from './firmware-upgrade.component';

describe('FirmwareUpgradeRouteModule', () => {
  let component: FirmwareUpgradeComponent;
  let fixture: ComponentFixture<FirmwareUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
