import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NotepadFeatureNoteBoardComponent } from '@notepad/notepad/feature-note-board';

export const shellRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@notepad/notepad/feature-note-board').then(
        (m) => m.NotepadFeatureNoteBoardComponent
      ),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(shellRoutes),
    NotepadFeatureNoteBoardComponent,
  ],
})
export class NotepadShellModule {}
