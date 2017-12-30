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
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.data.action === 'add' && this.value) {
          if (this.data.type === 'subject') {
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
          } else if (this.data.type === 'topic') {
            this.topic.add(
              {
                title: this.value,
                zone: 'zone', // TODO: get subject zone name
                subject: this.data.params.subjectId,
                importance: 1,
                control: 1
              }
            ).subscribe(result => {
              if (result) {
                this.topic.getAll(this.data.params.subjectId);
              }
            });
          }
        }
      }
    });
  }

}
