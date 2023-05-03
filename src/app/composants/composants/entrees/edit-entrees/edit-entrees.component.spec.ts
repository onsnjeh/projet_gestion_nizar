import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntreeComponent } from './edit-entrees.component';

describe('EditEntreeComponent', () => {
  let component: EditEntreeComponent;
  let fixture: ComponentFixture<EditEntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEntreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
