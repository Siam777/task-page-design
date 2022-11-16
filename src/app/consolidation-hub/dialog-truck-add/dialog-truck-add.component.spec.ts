import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTruckAddComponent } from './dialog-truck-add.component';

describe('DialogTruckAddComponent', () => {
  let component: DialogTruckAddComponent;
  let fixture: ComponentFixture<DialogTruckAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTruckAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTruckAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
