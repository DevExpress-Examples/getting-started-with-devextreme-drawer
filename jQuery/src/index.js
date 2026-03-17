$(() => {
  // Initialize data object
  const employee = {
    id: 1,
    firstName: 'John',
    lastName: 'Heart',
    position: 'CEO',
    birthDate: new Date('1964/03/16'),
    hireDate: new Date('1995/01/15'),
    notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
    address: '351 S Hill St.',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90013',
    phone: '+1(213) 555-9392',
    email: 'jheart@dx-email.com',
  };

  // Initialize form with instance reference
  const form = $('#form').dxForm({
    formData: employee,
    labelLocation: 'top',
    showColonAfterLabel: false,
    items: [{
      itemType: 'group',
      caption: 'Personal Information',
      colCount: 2,
      items: [{
        dataField: 'firstName',
        isRequired: true,
        validationRules: [{
          type: 'required',
          message: 'First Name is required',
        }],
      }, {
        dataField: 'lastName',
        isRequired: true,
        validationRules: [{
          type: 'required',
          message: 'Last Name is required',
        }],
      }, {
        dataField: 'position',
      }, {
        dataField: 'birthDate',
        editorType: 'dxDateBox',
        editorOptions: {
          displayFormat: 'yyyy/MM/dd',
        },
      }],
    }, {
      itemType: 'group',
      caption: 'Contact Information',
      colCount: 2,
      items: [{
        dataField: 'email',
        validationRules: [{
          type: 'email',
          message: 'Email is invalid',
        }],
      }, {
        dataField: 'phone',
      }, {
        dataField: 'address',
      }, {
        dataField: 'city',
      }, {
        dataField: 'state',
      }, {
        dataField: 'zipCode',
        validationRules: [{
          type: 'numeric',
          message: 'Zip Code must be numeric',
        }],
      }],
    }, {
      itemType: 'group',
      caption: 'Additional Information',
      items: [{
        dataField: 'notes',
        editorType: 'dxTextArea',
        editorOptions: {
          height: 100,
        },
      }, {
        dataField: 'hireDate',
        editorType: 'dxDateBox',
        editorOptions: {
          displayFormat: 'yyyy/MM/dd',
        },
      }],
    }, {
      itemType: 'button',
      buttonOptions: {
        text: 'Submit',
        type: 'success',
        onClick(_e) {
          const validationResult = form.validate();
          if (validationResult.isValid) {
            DevExpress.ui.notify('Form submitted successfully!', 'success', 2000);
          } else {
            DevExpress.ui.notify('Please fix validation errors', 'error', 2000);
          }
        },
      },
    }],
  }).dxForm('instance');

  // Initialize checkbox
  const checkBox = $('#check-box').dxCheckBox({
    text: 'I agree to the terms and conditions',
    value: false,
    onValueChanged(e) {
      if (e.value) {
        DevExpress.ui.notify('Thank you for agreeing to terms', 'info', 2000);
      }
    },
  });

  // Handle form submission
  $('#form-container').on('submit', (e) => {
    e.preventDefault();

    const validationResult = form.validate();
    if (validationResult.isValid && checkBox.option('value')) {
      setTimeout(() => {
        DevExpress.ui.notify('Processing form submission...', 'success', 3000);
      }, 500);
    } else if (!checkBox.option('value')) {
      DevExpress.ui.notify('Please agree to terms and conditions', 'warning', 2000);
    }
  });
});
