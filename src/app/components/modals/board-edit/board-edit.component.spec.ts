import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { BoardEditComponent } from './board-edit.component';

describe('BoardEditComponent', () => {
  let component: BoardEditComponent;
  let fixture: ComponentFixture<BoardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardEditComponent],
      imports: [SharedModule, BrowserAnimationsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
