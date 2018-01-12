import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubjectService } from '../../services/subject.service';
import { TopicService } from '../../services/topic.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  value:string = '';

  constructor(
    public dialogRef:MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subject:SubjectService,
    private topic:TopicService
  ) { }

  ngOnInit() {
    this.value = this.data.value;

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.data.action === 'add' && this.value) {
          if (this.data.type === 'subject') {
            this.addSubject();
          } else if (this.data.type === 'topic') {
            this.addTopic();
          }
        }

        if (this.data.action === 'edit' && this.value) {
          if (this.data.type === 'subject') {
            this.editSubject();
          } else if (this.data.type === 'topic') {
            this.editTopic();
          }
        }

        if (this.data.action === 'delete') {
          if (this.data.type === 'subject') {
            this.deleteSubject();
          } else if (this.data.type === 'topic') {
            this.deleteTopic();
          }
        }
      }
    });
  }

  addSubject() {
    this.subject.add(
      {
        title: this.value,
        zone: this.data.params.zone,
        importance: 1,
        control: 1
      }
    ).subscribe(result => {
      if (result) {
        this.subject.getAll(this.data.params.zone);
      }
    });
  }

  addTopic() {
    this.topic.add(
      {
        title: this.value,
        subject: this.data.params.subjectId,
        importance: 1,
        control: 1,
        description: ''
      }
    ).subscribe(result => {
      if (result) {
        this.topic.getAll(this.data.params.subjectId);
      }
    });
  }

  editSubject() {
    this.subject.edit(this.data.params.subjectId, { title: this.value })
    .subscribe( result => {
      if (result) {
        this.subject.getAll(this.data.params.zone);
      }
    });
  }

  editTopic() {
    this.topic.edit(this.data.params.topicId, { title: this.value })
    .subscribe( result => {
      if (result) {
        this.topic.getAll(this.data.params.subjectId);
      }
    });
  }

  deleteSubject() {
    this.subject.delete(this.data.params.subjectId).subscribe(result => {
      if (result) {
        this.subject.getAll(this.data.params.zone);
      }
    });
  }

  deleteTopic() {
    this.topic.delete(this.data.params.topicId).subscribe(result => {
      if (result) {
        this.topic.getAll(this.data.params.subjectId);
      }
    });
  }
}
