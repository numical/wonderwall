'use strict';
/* eslint-env jasmine */

import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HomePage from './index.js';

describe('Home Page ', () => {
  let page;

  beforeAll(() => {
    page = shallow(<HomePage />);
  });

  it('should match previous snapshot', () => {
    expect(shallowToJson(page)).toMatchSnapshot();
  });

  it('should say Hello world!', () => {
    expect(page.find('.page-title').text()).toEqual('Hello World!');
  });

  it('should have a Link to config page', () => {
    expect(page.find(Link).prop('to')).toEqual('/config');
  });
});

