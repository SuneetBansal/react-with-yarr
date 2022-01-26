import React from 'react';
import { Link } from 'yarr';

export const Header = () => (
  <nav>
    <Link exact to='/'>Route2</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link exact to='/route1'>Route1</Link>
  </nav>
);
