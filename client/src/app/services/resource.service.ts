import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceService {

  constructor(private http:Http) { }

  getAll(topicId:number) {
    return this.http.get(`/api/resource/getAll/${topicId}`).map(res => res.json());
  }

  add(newResource:object) {
    return this.http.post('/api/resource/add', newResource).map(res => res.json());
  }

  delete(resourceId:number) {
    return this.http.delete(`/api/resource/delete/${resourceId}`).map(res => res.json());
  }
}
