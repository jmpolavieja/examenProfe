import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteMenuComponent } from './parte-menu.component';

describe('ParteMenuComponent', () => {
  let component: ParteMenuComponent;
  let fixture: ComponentFixture<ParteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
