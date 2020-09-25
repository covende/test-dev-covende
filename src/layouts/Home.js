import React, {useState, useEffect, Suspense} from 'react';
import styled from '@emotion/styled';
import {connect} from 'react-redux';

// Material-UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const Topbar = React.lazy(() =>
  import('@components/Topbar').then((module) => ({
    default: module.TopbarPublic,
  })),
);
const Footer = React.lazy(() => import('@components/Footer'));

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
    Bienvenidos a Covende
  </Box>
);

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const ContentPage = styled.div`
  background-color: #e5e5e5;
  /* padding: 25px; */
  min-height: calc(100vh - 110px);
`;

const HomeLayout = (props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    console.log('HomeLayout: useEffect');
  }, []);

  // Obtiene la vista secundaria que nos gustaría renderizar
  const children = props.children || null;
  return (
    <>
      <Wrapper>
        <Suspense fallback={loading()}>
          <Topbar />
        </Suspense>
        <ContentPage>
          <Suspense fallback={loading()}>{children}</Suspense>
        </ContentPage>
        <Footer />
      </Wrapper>
    </>
  );
};

export default connect()(HomeLayout);
