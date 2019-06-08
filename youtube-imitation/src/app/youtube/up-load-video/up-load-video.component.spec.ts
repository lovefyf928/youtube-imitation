import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLoadVideoComponent } from './up-load-video.component';

describe('UpLoadVideoComponent', () => {
  let component: UpLoadVideoComponent;
  let fixture: ComponentFixture<UpLoadVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpLoadVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpLoadVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
