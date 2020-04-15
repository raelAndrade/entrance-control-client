export class Meeting {

  constructor (
    public id: string,
    public name: string,
    public status: string,
    public description: string,
    public administrationId: string,
    public churchId: string,
    public churchName: string,
    public churchRoom: string,
    public churchCode: string,
    public createdByUser: string,
    public cardNumbers: [],
    public created: Date,
    public updated: Date,
    public closeAt: Date,
    public open: Date,
    public openLimitAt: Date,
    public closeLimitAt: Date,
  ){ }
}