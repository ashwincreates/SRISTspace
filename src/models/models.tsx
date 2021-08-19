export interface Note {
  topic: string;
  link: string;
  upload: Date;
  subject: string;
  semester: number;
  stream: string;
}

export interface Article {
	id : Object;
	title : string;
	article : Object[];
}
export interface Event {
	id : Object;
	eventname : string;
  eventdate:string;
  eventvenue:string;
	
}
