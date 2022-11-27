import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NotesEntity } from './+state/notes.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:8080/api/note';

  list(): Observable<NotesEntity[]> {
    return this.http.get<NotesEntity[]>(this.baseUrl);
  }

  create(recipe: NotesEntity): Observable<NotesEntity> {
    return this.http.post<NotesEntity>(this.baseUrl, recipe);
  }

  update(recipe: NotesEntity, id: number): Observable<NotesEntity> {
    return this.http.put<NotesEntity>(`${this.baseUrl}/${id}`, recipe);
  }

  delete(id: number): Observable<number> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(map(() => id));
  }
}
