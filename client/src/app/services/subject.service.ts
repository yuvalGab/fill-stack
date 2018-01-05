import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectService {
  public list = new EventEmitter();

  constructor(private http:Http) { }

  getAll(zone:string) {
    return this.http.get(`/api/subject/getAll/${zone}`).map(res => res.json())
    .subscribe(results => {
      this.list.emit(results);
    });
  }

  getTitle(subjectId:string) {
    return this.http.get(`/api/subject/getTitle/${subjectId}`).map(res => res.json());
  }

  add(newSubject:object) {
    return this.http.post('/api/subject/add', newSubject).map(res => res.json());
  }

  edit(id:number, subjectDetails:object) {
    return this.http.put('/api/subject/edit', { id, subjectDetails }).map(res => res.json());
  }
}
