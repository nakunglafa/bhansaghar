import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKitchenComponent } from './edit-kitchen.component';

describe('EditKitchenComponent', () => {
  let component: EditKitchenComponent;
  let fixture: ComponentFixture<EditKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
