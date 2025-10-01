export interface Employee {
  name: string;
  position: string;
  hireDate: Date;
  officeNumber: number;
  phone: string;
  skype: string;
  email: string;
  notes: string;
}

export interface SubmitButtonOptions {
  text: string;
  type: string;
  useSubmitBehavior: boolean;
}
