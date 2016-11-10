'use strict';
import React from 'react';
import { Link } from 'react-router';

export default function () {
  return (
    <div>
      <div className='page-title'>Hello World!</div>
      <Link to='/config'>Configure</Link>
    </div>
  );
}
