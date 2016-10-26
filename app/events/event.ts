export interface IEvent {
	name: string;
	code: string;
	description: string;
	date: string;
	time: string;
	duration: string;
	fee: number;
	rating: number;
	imageUrl: string;
	location: Object;
	capacity:number;
}

export class Event implements IEvent {
	constructor(
		public name: string,
		public code: string, 
		public description: string,
		public date: string, 
		public time: string,
		public duration: string, 
		public fee: number,
		public rating: number, 
		public imageUrl: string,
		public location: Object,
		public capacity: number
	){};

	calculateDiscount(percent:number): number {
		return this.price - (this.price*percent/100);
	}
}