import React, {FC} from 'react';
import {Root} from 'native-base';
import {Provider} from 'mobx-react';
import profileStore from './src/stores/ProfileStore';
import AppRoutes from './src/routes';

const App: FC = () => {
  return (
    <Provider profileStore={profileStore}>
      <Root>
        <AppRoutes />
      </Root>
    </Provider>
  );
};

export default App;
