'use strict';
/* eslint-env jasmine */

import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ConfigPage from './index.js';

describe('Not Found Page ', () => {
  let page;

  beforeAll(() => {
    page = shallow(<ConfigPage />);
  });

  it('should match previous snapshot', () => {
    expect(shallowToJson(page)).toMatchSnapshot();
  });

  it('should say Page Not Found', () => {
    expect(page.find('.page-title').text()).toEqual('Page Not Found');
  });

  it('should have a Link to home  page', () => {
    expect(page.find(Link).prop('to')).toEqual('/');
  });
});

