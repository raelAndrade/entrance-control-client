export class MeetingRoom {
  id: string;
  name: string;
  description: string;
  entrances: [];
  created: Date;
  updated: Date;

  constructor() {
    this.created = new Date;
    this.updated = new Date;
  }

  _constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.created = new Date;
    this.updated = new Date;
  }
}
