import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { NotesEntity } from './notes.models';

export const initNotes = createAction('[Notes/API] Load Notes');

export const loadNotesSuccess = createAction(
  '[Notes/API] Load Notes Success',
  props<{ notes: NotesEntity[] }>()
);

export const loadNotesFailure = createAction(
  '[Notes/API] Load Notes Failure',
  props<{ error: any }>()
);

export const createNote = createAction(
  '[Notes/API] Create Note',
  props<{ note: NotesEntity }>()
);

export const createNoteSuccess = createAction(
  '[Notes/API] Create Note Success',
  props<{ note: NotesEntity }>()
);

export const createNoteFailure = createAction(
  '[Notes/API] Create Note Failure',
  props<{ error: any }>()
);

export const updateNote = createAction(
  '[Notes/API] Update Note',
  props<{ note: NotesEntity; id: number }>()
);

export const updateNoteSuccess = createAction(
  '[Notes/API] Update Note Success',
  props<{ update: Update<NotesEntity> }>()
);

export const updateNoteFailure = createAction(
  '[Notes/API] Update Note Failure',
  props<{ error: any }>()
);

export const deleteNote = createAction(
  '[Notes/API] Delete Note',
  props<{ id: number }>()
);

export const deleteNoteSuccess = createAction(
  '[Notes/API] Delete Note Success',
  props<{ id: number }>()
);

export const deleteNoteFailure = createAction(
  '[Notes/API] Delete Note Failure',
  props<{ error: any }>()
);
