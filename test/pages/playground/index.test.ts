import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PlaygroundIndex from '~/pages/playground/index.vue';

describe('Page index "/playground"', () => {
  it('Renders Playground', () => {
    const wrapper = mount(PlaygroundIndex);
    expect(wrapper.text()).toContain('Playground');
  });

  // Add more test cases as needed
});
