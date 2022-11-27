import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadFeatureNoteBoardComponent } from './notepad-feature-note-board.component';

describe('NotepadFeatureNoteBoardComponent', () => {
  let component: NotepadFeatureNoteBoardComponent;
  let fixture: ComponentFixture<NotepadFeatureNoteBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotepadFeatureNoteBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotepadFeatureNoteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
