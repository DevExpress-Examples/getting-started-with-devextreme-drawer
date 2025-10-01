<script setup lang="ts">
import { ref } from 'vue';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import {
  DxForm,
  DxSimpleItem,
  DxGroupItem,
  DxButtonItem,
  DxButtonOptions,
  DxNumericRule,
  DxEmailRule,
} from 'devextreme-vue/form';
import { DxCheckBox } from 'devextreme-vue/check-box';
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
import 'devextreme-vue/text-area';
import notify from 'devextreme/ui/notify';
import type { DxSpeedDialActionTypes } from 'devextreme-vue/speed-dial-action';
import type { DxCheckBoxTypes } from 'devextreme-vue/check-box';
import type { Employee } from '../types';

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

const isFormReadOnly = ref<boolean>(false);

const handleSubmit = (e: Event): void => {
  setTimeout(() => {
    notify('Submitted', 'success', 2000);
  }, 1000);

  e.preventDefault();
};

const handleClick = (e: DxSpeedDialActionTypes.ClickEvent): void => {
  const label = e.component.option('label');
  notify(`SpeedDialAction \`${label}\` was clicked!`, 'success', 2000);
};

const onReadOnlyChanged = (e: DxCheckBoxTypes.ValueChangedEvent): void => {
  const message = e.value ? 'Form is now read-only' : 'Form is now editable';
  notify(message, 'info', 1500);
};
</script>

<template>
  <div id="app-container">
    <form
      id="form"
      @submit="handleSubmit"
    >
      <DxForm
        :form-data="employee"
        label-location="top"
        :read-only="isFormReadOnly"
      >
        <DxGroupItem
          caption="Personal Information"
          :col-count="2"
        >
          <DxSimpleItem
            data-field="name"
            :is-required="true"
          />
          <DxSimpleItem data-field="position"/>
          <DxSimpleItem
            data-field="hireDate"
            editor-type="dxDateBox"
          />
          <DxSimpleItem
            data-field="officeNumber"
            :is-required="true"
          >
            <DxNumericRule message="This field should contain a number"/>
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem
          caption="Contact Information"
          :col-count="2"
        >
          <DxSimpleItem data-field="phone"/>
          <DxSimpleItem data-field="skype"/>
          <DxSimpleItem
            data-field="email"
            :col-span="2"
          >
            <DxEmailRule message="This is not a valid Email"/>
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem caption="Additional Information">
          <DxSimpleItem
            data-field="notes"
            editor-type="dxTextArea"
          />
        </DxGroupItem>

        <DxButtonItem>
          <DxButtonOptions
            text="Submit"
            type="success"
            :use-submit-behavior="true"
          />
        </DxButtonItem>
      </DxForm>
    </form>

    <div id="check-box">
      <DxCheckBox
        id="check-box"
        text="Enable read-only mode"
        v-model:value="isFormReadOnly"
        @value-changed="onReadOnlyChanged"
      />
    </div>

    <DxSpeedDialAction
      icon="add"
      label="Add"
      :index="1"
      @click="handleClick"
    />
  </div>
</template>

<style scoped>
#form {
  padding: 10px;
  border: 1px solid;
}

#check-box {
  margin-top: 10px;
}

#app-container {
  width: 900px;
  position: relative;
}
</style>
