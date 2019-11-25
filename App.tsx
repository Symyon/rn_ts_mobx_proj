import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'mobx-react';
import ProfileStore from './src/stores/ProfileStore';
import AppContainer from './src/routes';

const App: FC = () => {
  return (
    <Provider {...ProfileStore}>
      <AppContainer />
    </Provider>
  );
};

export default App;
