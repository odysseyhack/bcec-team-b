import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticBlocksComponent } from './statistic-blocks.component';

describe('StatisticBlocksComponent', () => {
  let component: StatisticBlocksComponent;
  let fixture: ComponentFixture<StatisticBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
