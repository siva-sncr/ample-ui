import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderComponent } from './sub.header.component';

describe('SubHeaderRouteModule', () => {
  let component: SubHeaderComponent;
  let fixture: ComponentFixture<SubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
