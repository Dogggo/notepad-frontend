import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import {
  deleteNote,
  NotepadDataAccessModule,
  NotesState,
} from '@notepad/notepad/data-access';
import { Store } from '@ngrx/store';

export interface ModalInterface {
  data: any;
  callbackMethod: (note: any, id?: number) => void;
}

const imports = [ReactiveFormsModule, NotepadDataAccessModule];

const materialModules = [
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
];

@Component({
  selector: 'notepad-notepad-ui-form-note',
  standalone: true,
  imports: [CommonModule, ...materialModules, ...imports],
  templateUrl: './notepad-ui-form-note.component.html',
  styleUrls: ['./notepad-ui-form-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotepadUiFormNoteComponent {
  @Output()
  note = new EventEmitter();

  maxCharacters = 200;
  minCharacters = 1;

  form = this.formBuilder.group({
    content: [
      '',
      [
        Validators.required,
        Validators.minLength(this.minCharacters),
        Validators.maxLength(this.maxCharacters),
      ],
    ],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    @Inject(MAT_DIALOG_DATA) public modalData: ModalInterface,
    public modalRef: MatDialogRef<NotepadUiFormNoteComponent>,
    private store: Store<NotesState>
  ) {
    if (modalData) {
      this.form.patchValue(modalData.data);
    }
  }

  get content() {
    return this.form.controls.content;
  }

  handleSave(): void {
    this.modalData.callbackMethod(this.form.value, this.modalData.data?.id);
  }

  handleDiscard(): void {
    this.modalRef.close();
  }

  handleDelete(id: number) {
    this.store.dispatch(deleteNote({ id }));
    this.modalRef.close();
  }
}
