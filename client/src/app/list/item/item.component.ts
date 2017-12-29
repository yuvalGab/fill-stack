import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data:Object; 
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickItem(id) {
    this.onClick.emit(id);
  }

}
