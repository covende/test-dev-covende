import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <React.Fragment>
      <h1>404 - ¡No se encontro!</h1>
      <Link to='/'>Home</Link>
    </React.Fragment>
  );
}
