import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisturbancesComponent } from './disturbances.component';

describe('HeaderRouteModule', () => {
  let component: DisturbancesComponent;
  let fixture: ComponentFixture<DisturbancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisturbancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisturbancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
