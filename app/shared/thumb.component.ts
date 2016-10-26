import { Component, OnChanges, Input,
    Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'acw-thumb',
    templateUrl: 'app/shared/thumb.component.html',
    styleUrls: ['app/shared/thumb.component.css']
})
export class ThumbComponent {
    thumbsWidth: number;
    @Input() rating: number;
    ratingClicked: EventEmitter<string>;

    ngOnChanges(): void {
		this.thumbsWidth = this.rating * 86 / 5;
	}
	@Output() ratingClicked:
	EventEmitter<string> = new EventEmitter<string>

	onClick() {
		this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
	}
	
}