import React from 'react';

import {TopbarContainer, AppLogo} from './TopbarLevelOne.styles';

import logoPng from '@images/Logo-CoVende.png';

export default function TopbarLevelOne() {
  return (
    <TopbarContainer>
      <AppLogo src={logoPng} alt='Covende Perú' />
    </TopbarContainer>
  );
}
