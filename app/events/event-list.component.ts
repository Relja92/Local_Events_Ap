import { Component, OnInit, Inject } from 'angular2/core';
import { IEvent } from './event'
import { EventFilterPipe} from './event-filter.pipe';
import  { ThumbComponent } from '../shared/thumb.component';
import  { EventService } from './event.service';

@Component({
	selector: 'el-events',
	templateUrl: 'app/events/event-list.component.html',
	styleUrls: ['app/events/event-list.component.css'],
	pipes: [EventFilterPipe],
	directives: [ThumbComponent]
})

export class EventListComponent implements OnInit{
	pageTitle: string = 'Event List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	searchCriteria: string;
    events: IEvent[]; 
    errorMessage: string;

    constructor(private _eventService: EventService){

    }

	ngOnInit() : void{
		this.events = this._eventService.getEvents()
            .subscribe(events => this.events = events, errpr => this.errorMessage = <any>error);
	}
	toggleImage() : void {
		this.showImage = !this.showImage;
	}
    onRatingClicked(message:string): void {
        this.pageTitle = 'Event List: ' + message;
    }
}