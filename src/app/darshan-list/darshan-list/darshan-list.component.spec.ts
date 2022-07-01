import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshanListComponent } from './darshan-list.component';

describe('DarshanListComponent', () => {
  let component: DarshanListComponent;
  let fixture: ComponentFixture<DarshanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
