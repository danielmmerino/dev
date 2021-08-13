import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopRespComponent } from './pop-resp.component';

describe('PopRespComponent', () => {
  let component: PopRespComponent;
  let fixture: ComponentFixture<PopRespComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopRespComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
