import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventairesParDepotComponent } from './inventaires-par-depot.component';

describe('InventairesParDepotComponent', () => {
  let component: InventairesParDepotComponent;
  let fixture: ComponentFixture<InventairesParDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventairesParDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventairesParDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
