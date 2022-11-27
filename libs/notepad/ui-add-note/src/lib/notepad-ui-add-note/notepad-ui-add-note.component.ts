import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadUiNoteComponent } from '@notepad/notepad/ui-note';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'notepad-notepad-ui-add-note',
  standalone: true,
  imports: [CommonModule, NotepadUiNoteComponent, MatIconModule],
  templateUrl: './notepad-ui-add-note.component.html',
  styleUrls: ['./notepad-ui-add-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotepadUiAddNoteComponent {}
