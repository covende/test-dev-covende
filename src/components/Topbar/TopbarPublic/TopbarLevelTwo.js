import React from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav`
  position: fixed;
  padding: 70px 15px 0px 70px;
  width: 100%;
  height: 40px;
  display: inline-flex;
  background-color: ${(props) => props.theme.colors.celeste};
  color: #ffffff;
  box-shadow: 0px 2px 5px rgba(196, 196, 196, 0.93);
`;

const Categorias = styled.span`
  margin: auto 15px;
  font-size: 12px;
`;

export default function TopbarLevelTwo() {
  return (
    <Nav>
      <Categorias>Categorias</Categorias>
    </Nav>
  );
}
