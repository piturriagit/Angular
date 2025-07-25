import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPanel2 } from './buttons-panel2';

describe('ButtonsPanel2', () => {
  let component: ButtonsPanel2;
  let fixture: ComponentFixture<ButtonsPanel2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsPanel2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsPanel2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
