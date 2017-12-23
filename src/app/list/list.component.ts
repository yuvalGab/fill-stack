import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../services/subjects.service';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SubjectsService, TopicsService]
})
export class ListComponent implements OnInit {
  type:string;
  title:string = '';
  list:Object[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private subjects:SubjectsService,
    private topics:TopicsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.type = data.type;
      switch (data.type) {
        case 'zone': {
            this.route.params.subscribe(params => {
              const zone = params.name.replace('-', ' ');
              if (zone === 'client side' || zone === 'server side' || zone === 'both sides') {
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
              this.topicsListInit(subjectId);
            })
          }
        break;
      }
    })
  }

  subjectsListInit(zone:string) {
    this.title = `${zone} subjects list`;
    this.list = this.subjects.getSubjects(zone);
  }

  topicsListInit(subjectId:string) {
    this.title = `subject - ${subjectId}`;
    this.list = this.topics.getTopics(subjectId);
  }

  onClickItem(id) {
    const route = this.type === 'zone' ? 'subject' : 'topic';
    this.router.navigate([route, id]);
  }

}
