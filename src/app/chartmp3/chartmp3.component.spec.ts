import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartmp3Component } from './chartmp3.component';

describe('Chartmp3Component', () => {
  let component: Chartmp3Component;
  let fixture: ComponentFixture<Chartmp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chartmp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartmp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
