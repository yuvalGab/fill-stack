import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.css']
})
export class SelectLevelComponent implements OnInit {
  @Input() value:number;
  @Input() label:string = 'select level';
  @Output() onChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChangeLevel(e) {
    this.onChange.emit(e.value);
  }

}
