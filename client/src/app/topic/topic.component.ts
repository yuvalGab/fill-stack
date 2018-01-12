import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  isLoaded:boolean = false;
  data:object;

  constructor(
    private route:ActivatedRoute, 
    private router:Router, 
    private topic:TopicService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.topic.getOne(id).subscribe(result => {
        this.data = result;
        this.isLoaded = true;
      });
    });
  }

}
