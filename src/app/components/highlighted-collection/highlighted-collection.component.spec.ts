import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedCollectionComponent } from './highlighted-collection.component';

describe('HighlightedCollectionComponent', () => {
  let component: HighlightedCollectionComponent;
  let fixture: ComponentFixture<HighlightedCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
