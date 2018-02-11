import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubjectService } from '../../services/subject.service';
import { TopicService } from '../../services/topic.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  value:string = '';

  constructor(
    public dialogRef:MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private subject:SubjectService,
    private topic:TopicService,
    private snackBar:MatSnackBar,
    private loader:LoaderService
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
    this.loader.show();
    this.subject.add(
      {
        title: this.value,
        zone: this.data.params.zone
      }
    ).subscribe(({ error }) => {
      this.loader.hide();
      if (!error) {
        this.subject.getAll(this.data.params.zone);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  addTopic() {
    this.loader.show();
    this.topic.add(
      {
        title: this.value,
        subjectId: +this.data.params.subjectId
      }
    ).subscribe(({ error }) => {
      this.loader.hide();
      if (!error) {
        this.topic.getAll(this.data.params.subjectId);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  editSubject() {
    this.loader.show();
    this.subject.edit(this.data.params.subjectId, { title: this.value })
    .subscribe(({ error }) => {
      this.loader.hide();
      if (!error) {
        this.subject.getAll(this.data.params.zone);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  editTopic() {
    this.loader.show();
    this.topic.edit(this.data.params.topicId, { title: this.value })
    .subscribe(({ error }) => {
      this.loader.hide();
      if (!error) {
        this.topic.getAll(this.data.params.subjectId);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  deleteSubject() {
    this.loader.show();
    this.subject.delete(this.data.params.subjectId).subscribe(({ error }) => {
      this.loader.hide();
      if (!error) {
        this.subject.getAll(this.data.params.zone);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }

  deleteTopic() {
    this.loader.show();
    this.topic.delete(this.data.params.topicId).subscribe(({ error }) => {
      this.loader.hide();
      if (!error) {
        this.topic.getAll(this.data.params.subjectId);
      } else {
        this.snackBar.open(error, '', { duration: 2000 });
      }
    });
  }
}
