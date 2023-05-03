import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDepotsComponent } from './popup-depots.component';

describe('PopupDepotsComponent', () => {
  let component: PopupDepotsComponent;
  let fixture: ComponentFixture<PopupDepotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupDepotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupDepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
