import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  isLoaded:boolean = false;
  data:any;
  description:string;
  isDescDirty:boolean = false;

  constructor(
    private route:ActivatedRoute, 
    private router:Router, 
    private topic:TopicService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.topic.getOne(id).subscribe(result => {
        this.data = result;
        this.description = this.data.description;
        this.isLoaded = true;
      });
    });
  }

  onDescriptionChange(e) {
    const { value } = e.target;
    this.description = value;
    this.isDescDirty = value !== this.data.description;
  }

  onRedoDesc() {
    this.description = this.data.description;
    this.isDescDirty = false;
  }

  onSaveDesc() {
    this.topic.edit(this.data.id, { description: this.description })
    .subscribe(result => {
      if (result) {
        this.data.description = this.description;
        this.isDescDirty = false;
      }
    });
  }

}
