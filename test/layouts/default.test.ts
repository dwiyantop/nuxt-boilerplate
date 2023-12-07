import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LayoutDefault from '~/layouts/default.vue';

describe('Layouts > Custom', () => {
  it('Renders slot content inside Layout Default', () => {
    const wrapper = mount(LayoutDefault, {
      slots: {
        default: 'Hello, this is the slot content inside Layout Default!'
      }
    });

    expect(wrapper.text()).toContain('Hello, this is the slot content inside Layout Default!');
  });

  // Add more test cases as needed
});
