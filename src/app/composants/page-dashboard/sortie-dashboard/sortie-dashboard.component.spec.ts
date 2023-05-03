import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieDashboardComponent } from './sortie-dashboard.component';

describe('SortieDashboardComponent', () => {
  let component: SortieDashboardComponent;
  let fixture: ComponentFixture<SortieDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortieDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortieDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
