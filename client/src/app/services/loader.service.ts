import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {
  public status:Subject<any> = new Subject();

  constructor() { }

  show() {
    this.status.next(true);
    setTimeout(this.hide.bind(this) , 10000);
  }

  hide() {
    this.status.next(false);
  }

}
