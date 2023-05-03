import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreeDashboardComponent } from './entree-dashboard.component';

describe('EntreeDashboardComponent', () => {
  let component: EntreeDashboardComponent;
  let fixture: ComponentFixture<EntreeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
