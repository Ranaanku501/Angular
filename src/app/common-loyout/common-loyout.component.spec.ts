import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLoyoutComponent } from './common-loyout.component';

describe('CommonLoyoutComponent', () => {
  let component: CommonLoyoutComponent;
  let fixture: ComponentFixture<CommonLoyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonLoyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLoyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
