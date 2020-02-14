export class Administrations {
  id: string;
  name: string;
  cnpj: string;
  churches: [];
  created: Date;
  updated: Date;

  constructor() {
    this.created = new Date();
    this.updated = new Date();
  }

  _constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
    this.created = new Date();
    this.updated = new Date();
  }
}
