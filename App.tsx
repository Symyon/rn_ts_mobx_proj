import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'mobx-react';
import profileStore from './src/stores/ProfileStore';
import AppRoutes from './src/routes';

const App: FC = () => {
  return (
    <Provider profileStore = {profileStore}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
