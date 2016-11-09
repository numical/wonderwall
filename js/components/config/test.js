'use strict';
/* eslint-env jasmine */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ConfigPage from './index.js';

describe('Config Page ', () => {
  it('should match previous snapshot', () => {
    const page = shallow(<ConfigPage />);
    expect(shallowToJson(page)).toMatchSnapshot();
  });

  it('should say Config Page', () => {
    const page = shallow(<ConfigPage />);
    expect(page.find('div').text()).toEqual('Config Page');
  });
});

