import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivedevicesComponent } from './inactivedevices.component';

describe('HeaderRouteModule', () => {
  let component: InactivedevicesComponent;
  let fixture: ComponentFixture<InactivedevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivedevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivedevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
