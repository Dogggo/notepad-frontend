import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NOTES_FEATURE_KEY, NotesState, notesAdapter } from './notes.reducer';

// Lookup the 'Notes' feature state managed by NgRx
export const getNotesState =
  createFeatureSelector<NotesState>(NOTES_FEATURE_KEY);

const { selectAll, selectEntities } = notesAdapter.getSelectors();

export const getNotesLoaded = createSelector(
  getNotesState,
  (state: NotesState) => state.loaded
);

export const getNotesError = createSelector(
  getNotesState,
  (state: NotesState) => state.error
);

export const getAllNotes = createSelector(getNotesState, (state: NotesState) =>
  selectAll(state)
);

export const getNotesEntities = createSelector(
  getNotesState,
  (state: NotesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getNotesState,
  (state: NotesState) => state.selectedId
);

export const getSelected = createSelector(
  getNotesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
