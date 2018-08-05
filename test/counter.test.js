/* eslint no-unused-expressions: 0 */

import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';
import Counter from '../src/counter';

// Avoid Warning: render(): Rendering components directly into document.body is discouraged.
before(() => {
  const div = document.createElement('div');
  window.rootNode = div;
  document.body.appendChild(div);
});

Enzyme.configure({adapter: new Adapter()});

describe('<Counter />', () => {
  it('renders', () => {
    const MountedCounter = mount(
      <Counter/>,
      {attachTo: window.rootNode}
    );
    const increment = MountedCounter.find('.increment');
    const decrement = MountedCounter.find('.decrement');
    const result = MountedCounter.find('.result');

    increment.simulate('click');
    expect(result.text()).to.be.equal('1');
    increment.simulate('click');
    expect(result.text()).to.be.equal('2');
    decrement.simulate('click');
    expect(result.text()).to.be.equal('1');
    decrement.simulate('click');
    expect(result.text()).to.be.equal('0');
  });
});
