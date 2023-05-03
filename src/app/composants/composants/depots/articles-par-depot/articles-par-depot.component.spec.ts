import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesParDepotComponent } from './articles-par-depot.component';

describe('ArticlesParDepotComponent', () => {
  let component: ArticlesParDepotComponent;
  let fixture: ComponentFixture<ArticlesParDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesParDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesParDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
