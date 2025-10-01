import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../FormContent.vue';

describe('FormContent', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.text()).toContain('Personal Information');
  });
});
