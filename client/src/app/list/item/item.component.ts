import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data:Object; 
  @Output() onClick = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickItem(id:number) {
    this.onClick.emit(id);
  }

  onEditItem(id:number, title:string) {
    this.onEdit.emit({id, title});
  }

}
