import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupQrCodeArticlesComponent } from './popup-qr-code-articles.component';

describe('PopupQrCodeArticlesComponent', () => {
  let component: PopupQrCodeArticlesComponent;
  let fixture: ComponentFixture<PopupQrCodeArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupQrCodeArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupQrCodeArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
