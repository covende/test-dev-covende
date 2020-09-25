import React from 'react';

import TopbarLevelOne from './TopbarLevelOne';
import TopbarLevelTwo from './TopbarLevelTwo';

export default function TopbarPublic() {
  return (
    <React.Fragment>
      <TopbarLevelOne />
      <TopbarLevelTwo />
    </React.Fragment>
  );
}
