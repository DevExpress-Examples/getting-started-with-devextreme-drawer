import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Employee, SubmitButtonOptions } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  employee: Employee = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date('1995/01/15'),
    officeNumber: 901,
    phone: '+1(213) 555-9392',
    skype: 'jheart_DX_skype',
    email: 'jheart@dx-email.com',
    notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
  };

  isFormReadOnly = false;

  submitButtonOptions: SubmitButtonOptions = {
    text: 'Submit',
    type: 'success',
    useSubmitBehavior: true,
  };

  handleSubmit(e: Event): void {
    e.preventDefault();

    setTimeout(() => {
      notify('Form submitted successfully!', 'success', 2000);
    }, 500);
  }

  onReadOnlyChanged(): void {
    if (this.isFormReadOnly) {
      notify('Form is now read-only', 'info', 1500);
    } else {
      notify('Form is now editable', 'info', 1500);
    }
  }
}
