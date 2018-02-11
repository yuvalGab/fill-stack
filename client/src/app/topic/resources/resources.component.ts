import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgSwitch } from '@angular/common';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @Input() topicId:number;
  list:Object[] = [];

  constructor(
    private resource:ResourceService,  
    private snackBar:MatSnackBar, 
    private loader:LoaderService
  ) { }

  ngOnInit() {
    this.getAllResources();
  }

  getAllResources() {
    this.loader.show();
    this.resource.getAll(this.topicId).subscribe(({ error, data }) => {
      this.loader.hide();
      if (error) {
        return this.snackBar.open(error, '', { duration: 2000 });
      }

      this.list = data;
    });
  }

  createItem(data) {
    const { valid, value } = data;
    if (valid) {
      this.loader.show();
      this.resource.add({ ...value, topicId: this.topicId }).subscribe(({ error }) => {
        this.loader.hide();
        if (error) {
          return this.snackBar.open(error, '', { duration: 2000 });
        }
        
        data.reset();
        this.getAllResources();
      });
    }
  }

  deleteItem(resourceId:number) {
    this.loader.show();
    this.resource.delete(resourceId).subscribe(({ error }) => {
      this.loader.hide();
      if (error) {
        return this.snackBar.open(error, '', { duration: 2000 });
      }

      this.getAllResources();
    });
  }
}
