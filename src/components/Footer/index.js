import React from 'react';
import styled from '@emotion/styled';

import Grid from '@material-ui/core/Grid';

import Link from '@covende-ui/Link';

// Subsecciones
import FooterSubscribe from './FooterSubscribe';
import FooterBrand from './FooterBrand';
import Copyright from '../Copyright';

import {data} from './data';

const FooterStyled = styled.footer`
  color: #ffffff;
`;

const SeccionTitle = styled.p`
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
`;

const SeccionItem = styled.p`
  font-family: 'Poppins';
  font-size: 12px;
  margin: 0px;
`;

const FooterSections = styled.div`
  padding: 75px 80px;
  background-color: #011423;
  ${(props) => props.theme.mq.max.lg} {
    padding: 30px 0px 10px 0px;
    background: red;
  }

  ${(props) => props.theme.mq.max.md} {
    padding: 30px 0px 10px 0px;
    background: blue;
  }
  ${(props) => props.theme.mq.max.sm} {
    padding: 30px 0px 10px 0px;
    background: yellow;
    color: black;
  }
  ${(props) => props.theme.mq.max.xs} {
    padding: 30px 0px 10px 0px;
    background: green;
  }
`;

const Section = (props) => {
  return props.list.map((item, index) => {
    return (
      <Grid item key={index}>
        <SeccionItem key={index}>
          <Link color='inherit' href={item.route}>
            {item.title}
          </Link>
        </SeccionItem>
      </Grid>
    );
  });
};

const SectionList = (props) => {
  return props.sections.map((item, index) => {
    return (
      <Grid
        container
        direction='row'
        key={index}
        xs={12}
        sm={6}
        md={3}
        style={{marginBottom: 15, paddingLeft: 35}}>
        <Grid item>
          <SeccionTitle key={index}>{item.title}</SeccionTitle>
          <Section list={item.sections} />
        </Grid>
      </Grid>
    );
  });
};

export default function Footer() {
  return (
    <FooterStyled>
      <FooterSubscribe />
      <FooterBrand />
      <FooterSections>
        <Grid container>
          <SectionList sections={data} />
        </Grid>
      </FooterSections>
      <Copyright company='CoVende Perú' />
    </FooterStyled>
  );
}
