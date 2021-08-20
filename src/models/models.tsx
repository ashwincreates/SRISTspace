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
}
export interface Event {
	id : Object;
	eventname : string;
  eventdate:string;
  eventvenue:string;
	
}
