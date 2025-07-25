import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPanel } from './buttons-panel';

describe('ButtonsPanel', () => {
  let component: ButtonsPanel;
  let fixture: ComponentFixture<ButtonsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
