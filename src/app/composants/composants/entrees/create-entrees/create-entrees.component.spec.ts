import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntreeComponent } from './create-entrees.component';

describe('CreateEntreeComponent', () => {
  let component: CreateEntreeComponent;
  let fixture: ComponentFixture<CreateEntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEntreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
