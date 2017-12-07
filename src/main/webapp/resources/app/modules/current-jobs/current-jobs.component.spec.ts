import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentJobsComponent } from './current-jobs.component';

describe('CurrentJobsRouteModule', () => {
  let component: CurrentJobsComponent;
  let fixture: ComponentFixture<CurrentJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
