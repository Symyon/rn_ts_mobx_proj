import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {View} from 'native-base';
import {observer, inject} from 'mobx-react';

import User from '../../models/User';
import {ROUTES} from '../../routes';

export interface Props {
	navigation: any,
	profileStore: any,
}
export interface State {}

@inject("profileStore")
@observer
class AuthLoadingScreeen extends React.Component<Props, State> {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@userToken');
    const userJSON = await AsyncStorage.getItem('@user');
    const userObject = userJSON ? JSON.parse(userJSON) : null;
    const user = userObject
      ? new User(
          userObject['fullName'],
          userObject['email'],
          userObject['password'],
        )
      : new User('', '', '');

    this.props.profileStore.setInitialUser(user);

    const initialRouteName = userToken ? ROUTES.RootApp : ROUTES.RootAuth;
    this.props.navigation.navigate(initialRouteName);
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AuthLoadingScreeen;
