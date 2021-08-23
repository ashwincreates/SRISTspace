export interface Note {
  topic: string;
  link: string;
  upload: Date;
  subject: string;
  semester: number;
  stream: string;
}

export interface Article {
	title : string;
	article : Object[];
	likes : number;
	author : string;
	date: string;
	cap_img?: string;
}
export interface IEvent {
	id : string;
	eventname : string;
  eventdate:string;
  eventvenue:string;
	image : any;
	
}
