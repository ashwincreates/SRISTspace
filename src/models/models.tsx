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
	author : string;
	upload : Date;
	data : string;
	likes : number;
}
