import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSortieComponent } from './edit-sortie.component';

describe('EditSortieComponent', () => {
  let component: EditSortieComponent;
  let fixture: ComponentFixture<EditSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSortieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
