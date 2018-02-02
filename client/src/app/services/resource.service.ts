import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceService {

  constructor(private http:Http) { }

  add(newResource:object) {
    return this.http.post('/api/resource/add', newResource).map(res => res.json());
  }

}
