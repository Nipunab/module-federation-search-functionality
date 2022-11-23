import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import { renderToString } from '@vue/server-test-utils';
import { attest, toHaveZeroViolations } from 'attest-jest';

import App from '../../src/App.vue';

expect.extend(toHaveZeroViolations);

const slotComponent = {
  name: 'slot-component',
  props: ['text'],
  template: '<span>{{ text }}</span>',
};
const stubs = {
  'router-view': true,
  Module: slotComponent,
};

describe('App.vue', () => {
  let wrapper: Wrapper<App>;

  beforeEach(() => {
    const localVue = createLocalVue();
    wrapper = shallowMount(App, {
      stubs,
      mocks: {
        $route: '/',
      },
      localVue,
    });
  });

  afterEach(() => {
    if (wrapper) {
      wrapper.vm.$destroy();
    }
  });

  it('Matches Snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Has no accessibility violations', (done) => {
    renderToString(App)
      .then((str) => attest(str, { rules: { region: { enabled: false } } }))
      .then((results) => {
        expect(results).toHaveZeroViolations();
        done();
      });
  });
});
