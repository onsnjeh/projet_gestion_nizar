import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEntreeComponent } from './delete-entrees.component';

describe('DeleteEntreeComponent', () => {
  let component: DeleteEntreeComponent;
  let fixture: ComponentFixture<DeleteEntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEntreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
