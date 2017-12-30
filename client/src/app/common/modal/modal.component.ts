import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubjectService } from '../../services/subject.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [SubjectService]
})
export class ModalComponent implements OnInit {
  value:string = '';

  constructor(
    public dialogRef:MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subject:SubjectService
  ) { }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.data.action === 'add' && this.data.type === 'subject' && this.value) {
          this.subject.add(
            {
              title: this.value,
              zone: this.data.params.zone,
              importance: 1,
              control: 1
            }
          )
        }
      }
    });
  }

}
