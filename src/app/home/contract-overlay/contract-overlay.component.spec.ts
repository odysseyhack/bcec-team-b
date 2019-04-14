import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractOverlayComponent } from './contract-overlay.component';

describe('ContractOverlayComponent', () => {
  let component: ContractOverlayComponent;
  let fixture: ComponentFixture<ContractOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
