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
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { inject, observer } from 'mobx-react';

import User from '../../models/User';
import {ROUTES} from '../../routes';

export interface Props {
	navigation: any,
	profileStore: any,
}
export interface State {}

@inject("profileStore")
@observer
class LoginScreen extends React.Component<Props, State>{

  signIn = async () => {
    await AsyncStorage.setItem('@userToken', 'token');
    //temp
    const user = new User('test', 'testEmail', 'testPassword');
    await AsyncStorage.setItem('@user', JSON.stringify(user));
    this.props.navigation.navigate(ROUTES.Home)
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{color: '#888888'}}>Sing in</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <View padder>
            <Button
              block
              onPress={this.signIn}>
              <Text>Login</Text>
            </Button>
            <View padder>
              <Button
                transparent
                style={{alignSelf: 'flex-end'}}
                onPress={() =>
                  this.props.navigation.navigate(ROUTES.CreateAccount)
                }>
                <Text>Create Account</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
