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
	//author : string;
	//upload : Date;
	article : Object[];
	//images : {index : number, data : string}[];
	//likes : number;
}
