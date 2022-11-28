import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as NotesActions from './notes.actions';
import { NotesEntity } from './notes.models';

export const NOTES_FEATURE_KEY = 'notes';

export interface NotesState extends EntityState<NotesEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface NotesPartialState {
  readonly [NOTES_FEATURE_KEY]: NotesState;
}

export const notesAdapter: EntityAdapter<NotesEntity> =
  createEntityAdapter<NotesEntity>({
    selectId: (note) => note.id as number,
  });

export const initialNotesState: NotesState = notesAdapter.getInitialState({
  state: [],
  loaded: false,
  error: null,
});

const reducer = createReducer(
  initialNotesState,
  on(NotesActions.initNotes, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(NotesActions.loadNotesSuccess, (state, { notes }) =>
    notesAdapter.setAll(notes, { ...state, loaded: true })
  ),
  on(NotesActions.loadNotesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(NotesActions.createNoteSuccess, (state, { note }) => {
    return notesAdapter.addOne(note, { ...state, loaded: true });
  }),
  on(NotesActions.createNoteFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(NotesActions.createNoteSuccess, (state, { note }) => {
    return notesAdapter.addOne(note, { ...state, loaded: true });
  }),
  on(NotesActions.createNoteFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(NotesActions.updateNoteSuccess, (state, { update }) => {
    return notesAdapter.updateOne(update, { ...state, loaded: true });
  }),
  on(NotesActions.updateNoteFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(NotesActions.deleteNoteSuccess, (state, { id }) => {
    return notesAdapter.removeOne(id, { ...state, loaded: true });
  }),
  on(NotesActions.deleteNoteFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function notesReducer(state: NotesState | undefined, action: Action) {
  return reducer(state, action);
}
