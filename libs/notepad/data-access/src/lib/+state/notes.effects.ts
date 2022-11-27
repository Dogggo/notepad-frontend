import { Injectable } from '@angular/core';
import {
  createEffect,
  Actions,
  ofType,
  OnInitEffects
} from '@ngrx/effects';
import { NoteService } from '../note.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { Action } from '@ngrx/store';

import * as NotesActions from './notes.actions';

@Injectable()
export class NotesEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private noteService: NoteService
  ) {}

  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NotesActions.initNotes),
      switchMap(() => {
        return this.noteService.list().pipe(
          map((notes) => {
            return NotesActions.loadNotesSuccess({ notes });
          }),
          catchError((error) => {
            return of(NotesActions.loadNotesFailure(error));
          })
        );
      })
    );
  });

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NotesActions.createNote),
      switchMap((payload) => {
        return this.noteService.create(payload.note).pipe(
          map((note) => {
            return NotesActions.createNoteSuccess({ note });
          }),
          catchError((error) => {
            return of(NotesActions.createNoteFailure(error));
          })
        );
      })
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NotesActions.updateNote),
      switchMap((payload) => {
        return this.noteService.update(payload.note, payload.id).pipe(
          map((note) => {
            return NotesActions.updateNoteSuccess({
              update: { id: note.id as number, changes: note },
            });
          }),
          catchError((error) => {
            return of(NotesActions.updateNoteFailure(error));
          })
        );
      })
    );
  });

  delete$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NotesActions.deleteNote),
      switchMap((payload) => {
        return this.noteService.delete(payload.id).pipe(
          map((id: number) => {
            return NotesActions.deleteNoteSuccess({ id });
          }),
          catchError((error) => {
            return of(NotesActions.deleteNoteFailure(error));
          })
        );
      })
    );
  });

  ngrxOnInitEffects(): Action {
    return NotesActions.initNotes();
  }
}
