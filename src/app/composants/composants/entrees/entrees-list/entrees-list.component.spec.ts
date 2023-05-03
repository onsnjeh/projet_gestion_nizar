import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreeListComponent } from './entrees-list.component';

describe('EntreeListComponent', () => {
  let component: EntreeListComponent;
  let fixture: ComponentFixture<EntreeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
