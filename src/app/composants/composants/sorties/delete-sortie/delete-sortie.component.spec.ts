import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSortieComponent } from './delete-sortie.component';

describe('DeleteSortieComponent', () => {
  let component: DeleteSortieComponent;
  let fixture: ComponentFixture<DeleteSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSortieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
