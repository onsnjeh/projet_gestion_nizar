import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvementsParDepotComponent } from './mouvements-par-depot.component';

describe('MouvementsParDepotComponent', () => {
  let component: MouvementsParDepotComponent;
  let fixture: ComponentFixture<MouvementsParDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouvementsParDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouvementsParDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
