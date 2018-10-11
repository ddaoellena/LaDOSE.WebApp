import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  currentEvent: Event;


  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param) => this.eventService.getById(param.id).subscribe(e => this.currentEvent = e));

  }

}
