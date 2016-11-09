'use strict';
/* eslint-env jasmine */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './index.js';

describe('App ', () => {
  it('should match previous snapshot', () => {
    const app = shallow(<App />);
    expect(shallowToJson(app)).toMatchSnapshot();
  });

  it('should say Hello world!', () => {
    const app = shallow(<App />);
    expect(app.find('div').text()).toEqual('Hello World!');
  });
});

