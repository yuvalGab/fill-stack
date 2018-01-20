import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';
import { TopicService } from '../services/topic.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../list/modal/modal.component';
import { Subject } from 'rxjs/Subject';
import { FilterPipe } from '../pipes/filter.pipe';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  type:string;
  title:string = '';
  list:Object[] = [];
  zone:string;
  subjectId:number;
  filterBy:string = '';

  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private subject:SubjectService,
    private topic:TopicService,
    public dialog:MatDialog,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.type = data.type;
      switch (data.type) {
        case 'zone': {
            this.route.params.subscribe(params => {
              const zone = params.name.replace('-', ' ');
              if (zone === 'client side' || zone === 'server side' || zone === 'both sides') {
                this.zone = zone;
                this.subjectsListInit(zone);
              } else {
                this.router.navigate(['404']);
              }
            });
          }
          break;
      
        case 'subject': {
            this.route.params.subscribe(params => {
              const subjectId = params.id;
              this.subjectId = +subjectId;
              this.topicsListInit(subjectId);
            });
          }
          break;
      }
    });
  }

  subjectsListInit(zone:string) {
    this.title = `${zone} subjects list`;
    this.subject.getAll(zone);
    this.subject.list.subscribe(({ error, data }) => {
      if (!error) {
        this.list = data;
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }  
    });
  }

  topicsListInit(subjectId:string) {
    this.subject.getTitle(subjectId).subscribe(({error, title}) => {
      if (!error) {
        this.title = `${title} topics list`;
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });

    this.topic.getAll(subjectId);
    this.topic.list.subscribe(({ error, data }) => {
      if (!error) {
        this.list = data;
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  onClickItem(id) {
    const route = this.type === 'zone' ? 'subject' : 'topic';
    this.router.navigate([route, id]);
  }

  openDialog(action:string, type:string, title:string, msg:string, value:string, params:object):void {
    let dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: { action, type, title, msg, value, params }
    });
  }

  onAddItem() {
    switch (this.type) {
      case 'zone': {
          this.openDialog('add', 'subject', 'add new subject', '', '', { zone: this.zone });
        }
        break;
      case 'subject': {
          this.openDialog('add', 'topic', 'add new topic', '', '', { subjectId: this.subjectId });
        }
        break;
    }
  }

  onEditItem(item) {
    switch (this.type) {
      case 'zone': {
          this.openDialog('edit', 'subject', 'edit subject', '', item.title, { zone: this.zone, subjectId: item.id });
        }
        break;
      case 'subject': {
          this.openDialog('edit', 'topic','edit topic', '', item.title, { subjectId: this.subjectId, topicId: item.id });
        }
        break;
    }
  }

  onDeleteItem(id:number) {
    const msg = 'are you sure you want to delete this item?';
    switch (this.type) {
      case 'zone': {
          this.openDialog('delete', 'subject', 'delete subject', msg, '', { zone: this.zone, subjectId: id });
        }
        break;
      case 'subject': {
          this.openDialog('delete', 'topic','delete topic', msg, '', { subjectId: this.subjectId, topicId: id });
        }
        break;
    }
  }

  onChangeLevel({ type, id, value}) {
    const newDetails = type === 'importance' ? { importance: value } : { control: value };
    switch (this.type) {
      case 'zone': {
          this.subject.edit(id, newDetails).subscribe(({ error }) => {
            if (error) {
              this.snackBar.open(error, '', { duration: 2000 });
            }
          });
        }
        break;
      case 'subject': {
          this.topic.edit(id, newDetails).subscribe(({ error }) => {
            if (error) {
              this.snackBar.open(error, '', { duration: 2000 });
            }
          });
        }
        break;
    }
  }

  onFilterList(value:string) {
    this.filterBy = value;
  }
}
