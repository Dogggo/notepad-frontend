import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NotesEntity } from '@notepad/notepad/data-access';

@Component({
  selector: 'notepad-notepad-ui-note',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './notepad-ui-note.component.html',
  styleUrls: ['./notepad-ui-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotepadUiNoteComponent {
  @Input() iconName?: string;
  @Input() note!: NotesEntity;
}
