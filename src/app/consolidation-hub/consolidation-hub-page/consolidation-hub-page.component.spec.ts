import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidationHubPageComponent } from './consolidation-hub-page.component';

describe('ConsolidationHubPageComponent', () => {
  let component: ConsolidationHubPageComponent;
  let fixture: ComponentFixture<ConsolidationHubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidationHubPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidationHubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
