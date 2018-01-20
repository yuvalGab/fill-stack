import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubjectService } from '../../services/subject.service';
import { TopicService } from '../../services/topic.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private topic:TopicService,
    private snackBar:MatSnackBar
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
    ).subscribe(({ error }) => {
      if (!error) {
        this.subject.getAll(this.data.params.zone);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  addTopic() {
    this.topic.add(
      {
        title: this.value,
        subjectId: +this.data.params.subjectId,
        importance: 1,
        control: 1,
        description: ''
      }
    ).subscribe(({ error }) => {
      if (!error) {
        this.topic.getAll(this.data.params.subjectId);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  editSubject() {
    this.subject.edit(this.data.params.subjectId, { title: this.value })
    .subscribe(({ error }) => {
      if (!error) {
        this.subject.getAll(this.data.params.zone);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  editTopic() {
    this.topic.edit(this.data.params.topicId, { title: this.value })
    .subscribe(({ error }) => {
      if (!error) {
        this.topic.getAll(this.data.params.subjectId);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  deleteSubject() {
    this.subject.delete(this.data.params.subjectId).subscribe(({ error }) => {
      if (!error) {
        this.subject.getAll(this.data.params.zone);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  deleteTopic() {
    this.topic.delete(this.data.params.topicId).subscribe(({ error }) => {
      if (!error) {
        this.topic.getAll(this.data.params.subjectId);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }
}
