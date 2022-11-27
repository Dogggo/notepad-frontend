import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadUiNoteComponent } from './notepad-ui-note.component';

describe('NotepadUiNoteComponent', () => {
  let component: NotepadUiNoteComponent;
  let fixture: ComponentFixture<NotepadUiNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotepadUiNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotepadUiNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
