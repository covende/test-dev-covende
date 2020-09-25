import React, {Component, Suspense} from 'react';
import {connect} from 'react-redux';

import {changeLayout} from '@redux/actions';
import * as layoutConstants from '@constants/layout';

// Material-UI
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const Topbar = React.lazy(() => import('@components/Topbar'));
// const Navbar = React.lazy(() => import("@components/Navbar"));
// const RightSidebar = React.lazy(() => import("@components/RightSidebar"));
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
  </Box>
);

const HorizontalLayout = (props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    props.changeLayout(layoutConstants.LAYOUT_HORIZONTAL);
  }, []);

  /**
   * Abre el menú - Mobile
   */
  openMenu = (e) => {
    e.preventDefault();
    setIsMenuOpened(!isMenuOpened);
  };

  // Obtiene la vista secundaria que nos gustaría renderizar
  const children = props.children || null;
  return (
    <React.Fragment>
      <div id='wrapper'>
        <Suspense fallback={loading()}>
          <Topbar openLeftMenuCallBack={openMenu} {...props} />
        </Suspense>
        {/* <Suspense fallback={loading()}>
                    <Navbar isMenuOpened={this.state.isMenuOpened} {...this.props} />
                </Suspense> */}

        <div className='content-page'>
          <div className='content'>
            <Container fluid>
              <Suspense fallback={loading()}>{children}</Suspense>
            </Container>
          </div>

          <Footer />
        </div>
      </div>

      {/* <RightSidebar title="Customize" {...this.props}>
                // Posible chat
            </RightSidebar> */}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
    user: state.Auth.user,
  };
};
export default connect(mapStateToProps, {changeLayout})(HorizontalLayout);
