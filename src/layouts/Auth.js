import React, {Suspense} from 'react';
import {connect} from 'react-redux';

// Material-UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

// Loading
const loading = () => (
  <Box
    height='100%'
    display='flex'
    flex={1}
    alignItems='center'
    justifyContent='center'
    position='absolute'
    top={0}
    left={0}
    right={0}
    bottom={0}>
    <CircularProgress />
  </Box>
);

const AuthLayout = (props) => {
  const children = props.children || null;
  return <Suspense fallback={loading()}>{children}</Suspense>;
};

export default connect()(AuthLayout);
