import React from 'react';
import styled from '@emotion/styled';

const Main = styled.main`
  padding: 15px;
`;

const Breadcumbs = styled.div`
  padding-top: 115px;
  background-color: #ffffff;
  height: 30px;
`;

const BreadcumbsList = styled.ul`
  display: inline-flex;
  margin-top: auto;
  margin-bottom: auto;
`;

const BreadcumbsItem = styled.li`
  font-size: 12px;
  font-family: 'Poppins';
  margin-right: 25px;
  list-style: none;
  color: #004772;
`;

export default function Home() {
  return (
    <>
      <Breadcumbs>
        <BreadcumbsList>
          <BreadcumbsItem>¿Qué es covende?</BreadcumbsItem>
          <BreadcumbsItem>¿Cómo compro?</BreadcumbsItem>
          <BreadcumbsItem>Ayuda</BreadcumbsItem>
        </BreadcumbsList>
      </Breadcumbs>
      <Main>
        <div>Hola desde el develop en AWS Amplify</div>
      </Main>
    </>
  );
}
