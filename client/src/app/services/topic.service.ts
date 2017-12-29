import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TopicService {

  constructor(private http:Http) { }

  getAll(subjectId:string) {
    return this.http.get(`/api/topic/getAll/${subjectId}`).map(res => res.json());
  }

}
