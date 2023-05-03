import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDashboardComponent } from './produit-dashboard.component';

describe('ProduitDashboardComponent', () => {
  let component: ProduitDashboardComponent;
  let fixture: ComponentFixture<ProduitDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
