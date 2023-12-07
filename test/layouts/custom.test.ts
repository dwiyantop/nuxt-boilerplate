import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LayoutCustom from '~/layouts/custom.vue';

describe('Layouts > Custom', () => {
  it('Renders slot content inside Layout Custom', () => {
    const wrapper = mount(LayoutCustom, {
      slots: {
        default: 'Hello, this is the slot content inside Layout Custom!'
      }
    });

    expect(wrapper.text()).toContain('Hello, this is the slot content inside Layout Custom!');
  });

  // Add more test cases as needed
});
