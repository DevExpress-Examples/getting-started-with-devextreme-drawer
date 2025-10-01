import React, { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Form, {
  SimpleItem,
  GroupItem,
  ButtonItem,
  NumericRule,
  EmailRule,
  ButtonOptions,
} from 'devextreme-react/form';
import CheckBox from 'devextreme-react/check-box';
// @ts-expect-error - Required for Form editorType="dxTextArea" to work properly
// eslint-disable-next-line no-unused-vars
import TextArea from 'devextreme-react/text-area';
import notify from 'devextreme/ui/notify';
import type { CheckBoxTypes } from 'devextreme-react/check-box';
import type { Employee } from './types';

const employee: Employee = {
  name: 'John Heart',
  position: 'CEO',
  hireDate: new Date('1995/01/15'),
  officeNumber: 901,
  phone: '+1(213) 555-9392',
  skype: 'jheart_DX_skype',
  email: 'jheart@dx-email.com',
  notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
};

function App(): JSX.Element {
  const [isFormReadOnly, setIsFormReadOnly] = useState<boolean>(false);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notify('Form submitted successfully!', 'success', 2000);
  }, []);

  const onCheckBoxValueChanged = useCallback(
    (e: CheckBoxTypes.ValueChangedEvent) => {
      setIsFormReadOnly(e.value ?? false);
      const message = e.value ? 'Form is now read-only' : 'Form is now editable';
      notify(message, 'info', 1500);
    },
    [],
  );

  const submitButtonOptions = {
    text: 'Submit',
    type: 'success',
    useSubmitBehavior: true,
  };

  return (
    <div id="app-container">
      <form id="form-container" onSubmit={handleSubmit}>
        <Form
          formData={employee}
          labelLocation="top"
          showColonAfterLabel={false}
          readOnly={isFormReadOnly}
        >
          <GroupItem caption="Personal Information" colCount={2}>
            <SimpleItem
              dataField="name"
              isRequired={true}
            />
            <SimpleItem dataField="position" />
            <SimpleItem
              dataField="hireDate"
              editorType="dxDateBox"
            />
            <SimpleItem
              dataField="officeNumber"
              isRequired={true}
            >
              <NumericRule message="Office number must be a number" />
            </SimpleItem>
          </GroupItem>

          <GroupItem caption="Contact Information" colCount={2}>
            <SimpleItem dataField="phone" />
            <SimpleItem dataField="skype" />
            <SimpleItem dataField="email" colSpan={2}>
              <EmailRule message="Email is invalid" />
            </SimpleItem>
          </GroupItem>

          <GroupItem caption="Additional Information">
            <SimpleItem
              dataField="notes"
              editorType="dxTextArea"
            />
          </GroupItem>

          <ButtonItem>
            <ButtonOptions {...submitButtonOptions} />
          </ButtonItem>
        </Form>
      </form>

      <div id="check-box">
        <CheckBox
          text="Make form read-only"
          value={isFormReadOnly}
          onValueChanged={onCheckBoxValueChanged}
        />
      </div>
    </div>
  );
}

export default App;
