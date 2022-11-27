import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  createNote,
  deleteNote,
  getAllNotes,
  NotepadDataAccessModule,
  NotesEntity,
  NotesState,
  updateNote,
} from '@notepad/notepad/data-access';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotepadUiNoteComponent } from '@notepad/notepad/ui-note';
import { NotepadUiAddNoteComponent } from '@notepad/notepad/ui-add-note';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ModalInterface, NotepadUiFormNoteComponent } from '@notepad/notepad/ui-form-note';

const imports = [
  CommonModule,
  NotepadDataAccessModule,
  NotepadUiNoteComponent,
  NotepadUiAddNoteComponent,
];

const material = [MatDialogModule];

@Component({
  selector: 'notepad-notepad-feature-note-board',
  standalone: true,
  exportAs: 'NotepadFeatureNoteBoardComponent',
  imports: [...imports, ...material],
  templateUrl: './notepad-feature-note-board.component.html',
  styleUrls: ['./notepad-feature-note-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotepadFeatureNoteBoardComponent {
  modalRef!: MatDialogRef<any>;

  notes$: Observable<NotesEntity[]> =
    this.store.select<NotesEntity[]>(getAllNotes);

  constructor(private store: Store<NotesState>, public dialog: MatDialog) {}

  openModal(mode: 'edit' | 'save', note?: NotesEntity) {
    const modalInterface: ModalInterface = {
      data: note,
      callbackMethod: (note, id) => {
        if (mode === 'save') {
          this.store.dispatch(createNote({ note }));
        } else {
          this.store.dispatch(updateNote({ note, id: id as number }));
        }
      },
    };

    this.modalRef = this.dialog.open(NotepadUiFormNoteComponent, {
      width: '400px',
      height: '400px',
      data: modalInterface,
    });

    return this.modalRef.afterClosed();
  }

  handleDelete(id: number) {
    this.store.dispatch(deleteNote({ id }));
  }
}
