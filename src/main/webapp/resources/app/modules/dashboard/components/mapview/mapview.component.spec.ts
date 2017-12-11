import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapviewComponent } from './mapview.component';

describe('MapviewRouteModule', () => {
  let component: MapviewComponent;
  let fixture: ComponentFixture<MapviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
