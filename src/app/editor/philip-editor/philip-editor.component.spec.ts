import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilipEditorComponent } from './philip-editor.component';

describe('PhilipEditorComponent', () => {
  let component: PhilipEditorComponent;
  let fixture: ComponentFixture<PhilipEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilipEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilipEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
