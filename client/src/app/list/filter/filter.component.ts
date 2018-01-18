import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() onFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(e) {
    const { value } = e.target;
    this.onFilter.emit(value);
  }
}
