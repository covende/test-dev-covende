import React, {Suspense} from 'react';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';

import {changeSidebarTheme, changeSidebarType} from '@redux/actions';
import * as layoutConstants from '@constants/layout';

// const LeftSidebar = React.lazy(() => import('@components/LeftSidebar'));
const Topbar = React.lazy(() => import('@components/Topbar'));
const Footer = React.lazy(() => import('@components/Footer'));
// const RightSidebar = React.lazy(() => import('@components/RightSidebar'));

// loading
const emptyLoading = () => <div></div>;
const loading = () => <div className='text-center'></div>;

const VerticalLayout = (props) => {
  openLeftMenu = () => {
    if (document.body) {
      if (document.body.classList.contains('sidebar-enable')) {
        document.body.classList.remove('sidebar-enable');
        this.props.changeSidebarType(
          layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED,
        );
      } else {
        if (document.body.classList.contains('left-side-menu-condensed'))
          document.body.classList.remove('left-side-menu-condensed');
        document.body.classList.add('sidebar-enable');
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
      props.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED);
    }
  }, []);

  const children = props.children || null;

  // const isCondensed = this.props.layout.leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
  // const isLight = this.props.layout.leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT;

  return (
    <div className='app'>
      <div id='wrapper'>
        <Suspense fallback={emptyLoading()}>
          <Topbar openLeftMenuCallBack={openLeftMenu} {...props} />
        </Suspense>
        {/* <Suspense fallback={emptyLoading()}>
                    <LeftSidebar
                        isCondensed={isCondensed}
                        isLight={isLight}
                        {...this.props}
                    />
                </Suspense> */}

        <div className='content-page'>
          <div className='content'>
            <Container fluid>
              <Suspense fallback={loading()}>{children}</Suspense>
            </Container>
          </div>

          <Suspense fallback={emptyLoading()}>
            <Footer {...props} />
          </Suspense>
        </div>
      </div>

      {/* <Suspense fallback={emptyLoading()}>
                <RightSidebar title="Customize" {...this.props}>
                    // Posible chat
                </RightSidebar>
            </Suspense> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.Layout,
  };
};
export default connect(mapStateToProps, {
  changeSidebarTheme,
  changeSidebarType,
})(VerticalLayout);
