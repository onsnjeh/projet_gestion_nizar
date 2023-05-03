import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesBarresContenuComponent } from './codes-barres-contenu.component';

describe('CodesBarresContenuComponent', () => {
  let component: CodesBarresContenuComponent;
  let fixture: ComponentFixture<CodesBarresContenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesBarresContenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodesBarresContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
