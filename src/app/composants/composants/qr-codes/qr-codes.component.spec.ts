import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesBarresComponent } from './qr-codes.component';

describe('CodesBarresComponent', () => {
  let component: CodesBarresComponent;
  let fixture: ComponentFixture<CodesBarresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesBarresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodesBarresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
