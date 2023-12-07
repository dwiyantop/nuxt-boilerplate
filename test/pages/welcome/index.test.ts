import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import WelcomeIndex from '~/pages/welcome/index.vue';

describe('Page index "/welcome"', () => {
  it('Renders Sample component "Welcome"', () => {
    const wrapper = mount(WelcomeIndex);
    expect(wrapper.text()).toContain('Sample component "Welcome"');
  });

  // Add more test cases as needed
});
