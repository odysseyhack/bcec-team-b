import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsOverlayComponent } from './questions-overlay.component';

describe('QuestionsOverlayComponent', () => {
  let component: QuestionsOverlayComponent;
  let fixture: ComponentFixture<QuestionsOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
