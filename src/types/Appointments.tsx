export type IAppointment = {
    uuid: string;
    date: Date;
    description: string;
    [key: string]: unknown;
  }