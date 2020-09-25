import React from 'react';
import styled from '@emotion/styled';
import Link from '../@covende-ui/Link';

const Franja = styled.p`
  margin: auto 0px;
  padding: 7px 14px;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Poppins';
  background: #004772;
  text-align: center;
`;
export default function Copyright({company}) {
  return (
    // <Typography variant='body2' align='center'>
    <Franja>
      {'© '}
      {new Date().getFullYear()}{' '}
      <Link color='inherit' href='/'>
        {company}
      </Link>
      {' - Todos los derechos reservados.'}
    </Franja>
    // </Typography>
  );
}
