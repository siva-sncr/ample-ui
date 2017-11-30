import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpleComponent } from './ample.component';

describe('AmpleComponent', () => {
  let component: AmpleComponent;
  let fixture: ComponentFixture<AmpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
