'use strict';
/* eslint-env jasmine */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HomePage from './index.js';

describe('Home Page ', () => {
  it('should match previous snapshot', () => {
    const page = shallow(<HomePage />);
    expect(shallowToJson(page)).toMatchSnapshot();
  });

  it('should say Hello world!', () => {
    const page = shallow(<HomePage />);
    expect(page.find('div').text()).toEqual('Hello World!');
  });
});

