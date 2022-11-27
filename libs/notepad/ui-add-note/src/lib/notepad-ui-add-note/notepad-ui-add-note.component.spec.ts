import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadUiAddNoteComponent } from './notepad-ui-add-note.component';

describe('NotepadUiAddNoteComponent', () => {
  let component: NotepadUiAddNoteComponent;
  let fixture: ComponentFixture<NotepadUiAddNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotepadUiAddNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotepadUiAddNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
