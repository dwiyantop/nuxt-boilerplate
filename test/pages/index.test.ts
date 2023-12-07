import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Index from '~/pages/index.vue';

describe('Page index "/"', () => {
  it('Renders Hello Nuxt!', () => {
    const wrapper = mount(Index);
    expect(wrapper.text()).toContain('Hello Nuxt!');
  });

  // Add more test cases as needed
});
