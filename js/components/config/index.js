'use strict';
import React from 'react';
import { Link } from 'react-router';

export default function () {
  return (
    <div>
      <div className='page-title'>Config Page</div>
      <Link to='/'>Back to Wall</Link>
    </div>
  );
}
