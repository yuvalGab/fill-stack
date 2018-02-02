import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @Input() topicId:number;

  constructor() { }

  ngOnInit() {
  }

  onCreate(data) {
    const { valid, value } = data;
    if (valid) {
      console.log(value);
    }
  }

}
