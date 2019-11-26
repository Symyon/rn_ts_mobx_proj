import React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Left,
  Right,
  Icon,
  H2,
  Footer,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { inject, observer } from 'mobx-react';
import {ROUTES} from '../../routes';

export interface Props {
	navigation: any,
	profileStore: any,
}
export interface State {}

@inject("profileStore")
@observer
class HomeScreen extends React.Component<Props, State> {
  signOut = async () => {
    await AsyncStorage.multiRemove(['@userToken']);
    this.props.navigation.navigate(ROUTES.RootAuth);
  };

  render() {
    const user = this.props.profileStore.user;
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{color: '#888888'}}>Welcome back</Title>
          </Body>
        </Header>
        <Content>
          <View padder>
            <H2>{user.fullName}</H2>
          </View>
          <View padder>
            <Button block warning onPress={this.signOut}>
              <Text>Logout</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
