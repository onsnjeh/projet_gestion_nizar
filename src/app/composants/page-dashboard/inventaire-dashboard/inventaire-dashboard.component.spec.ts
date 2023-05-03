import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireDashboardComponent } from './inventaire-dashboard.component';

describe('InventaireDashboardComponent', () => {
  let component: InventaireDashboardComponent;
  let fixture: ComponentFixture<InventaireDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventaireDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventaireDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
