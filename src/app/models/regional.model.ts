export class Regional {
  id: string;
  initial: string;
  description: string;
  admninistrations: [];
  created: Date;
  updated: Date;

  constructor() {
    this.created = new Date();
    this.updated = new Date();
  }

  _constructor(initial: string, description: string) {
    this.initial = initial;
    this.description = description;
    this.created = new Date();
    this.updated = new Date();
  }
}
