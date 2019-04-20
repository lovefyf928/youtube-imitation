import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPwdComponent } from './enter-pwd.component';

describe('EnterPwdComponent', () => {
  let component: EnterPwdComponent;
  let fixture: ComponentFixture<EnterPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
