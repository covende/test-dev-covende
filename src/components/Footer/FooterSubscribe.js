import React from 'react';

import Grid from '@material-ui/core/Grid';

import Button from '@covende-ui/Button';

export default function FooterSubscribe() {
  return (
    // <Container style={{background: '#FFFFFF', height: '80px'}}>
    // <Grid spacing={4} style={{background: '#FFFFFF', height: '80px'}}>
    <Grid
      container
      style={{background: '#FFFFFF', padding: '30px', height: '175px'}}>
      <Button style={{height: '33px'}}>SUSCRIBIRTE</Button>
    </Grid>
    // </Container>
  );
}
