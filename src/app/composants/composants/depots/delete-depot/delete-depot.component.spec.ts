import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepotComponent } from './delete-depot.component';

describe('DeleteDepotComponent', () => {
  let component: DeleteDepotComponent;
  let fixture: ComponentFixture<DeleteDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
