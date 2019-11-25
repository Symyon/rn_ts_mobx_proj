import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {Button, View} from 'native-base';

import {ROUTES} from '../../routes';

class AuthLoadingScreeen extends React.Component<NavigationStackScreenProps> {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@userToken');
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
