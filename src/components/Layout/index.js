import React, {Component, Suspense, lazy} from 'react';
import {connect} from 'react-redux';

// Material-UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

// import {isUserAuthenticated} from '@helpers/authUtils';
// import * as layoutConstants from '@constants/layout';

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

// Todos los layouts/containers
const HomeLayout = lazy(() => import('@layouts/Home'));
// const AuthLayout = lazy(() => import('@layouts/Auth'));
// const VerticalLayout = lazy(() => import('@layouts/Vertical'));
// const HorizontalLayout = lazy(() => import('@layouts/Horizontal'));

/**
 * Exporta el componente con contenedor layout sobre este
 * @param {} WrappedComponent
 */
const withLayout = (WrappedComponent) => {
  const HOC = class extends Component {
    /**
     * Retorna el componente layout basado sobre diferentes propiedades
     */
    getLayout = () => {
      return HomeLayout;
      // if (!isUserAuthenticated()) return AuthLayout;
      // return AuthLayout;

      // let layoutCls = VerticalLayout;

      // switch (this.props.layout.layoutType) {
      //   case layoutConstants.LAYOUT_HORIZONTAL:
      //     layoutCls = HorizontalLayout;
      //     break;
      //   default:
      //     layoutCls = VerticalLayout;
      //     break;
      // }
      // return layoutCls;
    };

    render() {
      const Layout = this.getLayout();
      return (
        <Suspense fallback={loading()}>
          <Layout {...this.props}>
            <WrappedComponent {...this.props} />
          </Layout>
        </Suspense>
      );
    }
  };

  const mapStateToProps = (state) => {
    return {
      layout: state.Layout,
    };
  };
  return connect(mapStateToProps, null)(HOC);
};

export default withLayout;
