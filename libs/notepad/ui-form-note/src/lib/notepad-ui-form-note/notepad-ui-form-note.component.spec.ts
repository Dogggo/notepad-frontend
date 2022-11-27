import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadUiFormNoteComponent } from './notepad-ui-form-note.component';

describe('NotepadUiFormNoteComponent', () => {
  let component: NotepadUiFormNoteComponent;
  let fixture: ComponentFixture<NotepadUiFormNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotepadUiFormNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotepadUiFormNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
