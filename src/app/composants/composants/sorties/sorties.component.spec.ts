import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieComponent } from './sorties.component';

describe('SortieComponent', () => {
  let component: SortieComponent;
  let fixture: ComponentFixture<SortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
