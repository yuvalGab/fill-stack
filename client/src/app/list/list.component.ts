import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectService } from '../services/subject.service';
import { TopicService } from '../services/topic.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../common/modal/modal.component';
import { Subject } from 'rxjs/Subject';

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

  constructor(
    private route:ActivatedRoute, 
    private router:Router,
    private subject:SubjectService,
    private topic:TopicService,
    public dialog:MatDialog
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
            })
          }
          break;
      
        case 'subject': {
            this.route.params.subscribe(params => {
              const subjectId = params.id;
              this.subjectId = +subjectId;
              this.topicsListInit(subjectId);
            })
          }
          break;
      }
    })


  }

  subjectsListInit(zone:string) {
    this.title = `${zone} subjects list`;
    this.subject.getAll(zone);
    this.subject.list.subscribe(newList => {
      this.list = newList;
    });
  }

  topicsListInit(subjectId:string) {
    this.subject.getTitle(subjectId).subscribe(res => {
      this.title = `${res.title} topics list`;
    });
    this.topic.getAll(subjectId);
    this.topic.list.subscribe(list => {
      this.list = list;
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

  addItem() {
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

  editItem(item) {
    switch (this.type) {
      case 'zone': {
          this.openDialog('edit', 'subject', 'edit subject', '', item.title, { zone: this.zone, subjectId: item.id });
        }
        break;
      case 'subject': {
          this.openDialog('edit', 'topic','edit topic', '', item.title, { subjectId: this.subjectId, topicid: item.id });
        }
        break;
    }
  }
}
