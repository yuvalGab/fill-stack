import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicService } from '../services/topic.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../services/loader.service';

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
    private topic:TopicService,
    private snackBar:MatSnackBar,
    private loader:LoaderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.loader.show();
      this.topic.getOne(id).subscribe(({ error, data }) => {
        this.loader.hide();
        if (!error) {
          if (data === null) {
            return this.snackBar.open('topic does not exist', '', { duration: 2000 });
          }

          this.data = data;
          this.description = this.data.description;
          this.isLoaded = true;
        } else {
          this.snackBar.open(error, '', { duration: 2000 });
        }      
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
    .subscribe(({ error }) => {
      if (!error) {
        this.data.description = this.description;
        this.isDescDirty = false;
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

}
