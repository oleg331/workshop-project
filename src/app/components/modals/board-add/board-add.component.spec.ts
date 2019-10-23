import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { BoardAddComponent } from './board-add.component';

describe('BoardAddComponent', () => {
  let component: BoardAddComponent;
  let fixture: ComponentFixture<BoardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardAddComponent],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
