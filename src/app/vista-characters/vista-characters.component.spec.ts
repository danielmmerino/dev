import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCharactersComponent } from './vista-characters.component';

describe('VistaCharactersComponent', () => {
  let component: VistaCharactersComponent;
  let fixture: ComponentFixture<VistaCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
