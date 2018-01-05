import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TopicService {
  list = new EventEmitter();

  constructor(private http:Http) { }

  getAll(subjectId:string) {
    return this.http.get(`/api/topic/getAll/${subjectId}`).map(res => res.json())
    .subscribe(results => {
      this.list.emit(results);
    });
  }

  add(newTopic:object) {
    return this.http.post('/api/topic/add', newTopic).map(res => res.json());
  }

  edit(id:number, topicDetails:object) {
    return this.http.put('/api/topic/edit', { id, topicDetails }).map(res => res.json());
  }
}
