import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title:string = '';
  mockListData:Object[] = [
    {
      id: 1,
      title: 'JavaScript',
      zone: 'client side',
      importance: 3,
      control: 2
    },
    {
      id: 2,
      title: 'Node.js',
      zone: 'server side',
      importance: 3,
      control: 1
    },
    {
      id: 3,
      title: 'git',
      zone: 'both sides',
      importance: 2,
      control: 2
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
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
  }

  topicsListInit(subjectId:string) {
    this.title = `subject - ${subjectId}`;
  }

}
