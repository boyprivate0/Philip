import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilipDialogComponent } from './philip-dialog.component';

describe('PhilipDialogComponent', () => {
  let component: PhilipDialogComponent;
  let fixture: ComponentFixture<PhilipDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilipDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
