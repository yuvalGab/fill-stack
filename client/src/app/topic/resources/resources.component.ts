import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @Input() topicId:number;

  constructor(private resource:ResourceService,  private snackBar:MatSnackBar) { }

  ngOnInit() {
  }

  onCreate(data) {
    const { valid, value } = data;
    if (valid) {
      this.resource.add({ ...value, topicId: this.topicId }).subscribe(({ error }) => {
        if (error) {
          this.snackBar.open(error, '', { duration: 2000 });
        }
      });
    }
  }

}
