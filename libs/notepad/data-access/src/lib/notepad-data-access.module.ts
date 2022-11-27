import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNotes from './+state/notes.reducer';
import { NotesEffects } from './+state/notes.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromNotes.NOTES_FEATURE_KEY, fromNotes.notesReducer),
    EffectsModule.forFeature([NotesEffects]),
  ],
})
export class NotepadDataAccessModule {}
