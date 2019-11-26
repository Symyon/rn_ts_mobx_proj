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
  Toast,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {inject, observer} from 'mobx-react';

import User from '../../models/User';
import {ROUTES} from '../../routes';

export interface Props {
  navigation: any;
  profileStore: any;
}
export interface State {
  email: string;
  password: string;
  formValid: boolean;
}

@inject('profileStore')
@observer
class LoginScreen extends React.Component<Props, State> {

  onEmailChange = (email: string) => {
    this.setState({email: email.toLowerCase()}, () => this.validateForm());
  };

  onPasswordChange = (password: string) => {
    this.setState({password}, () => this.validateForm());
  };

  validateForm() {
    const emailValid = this.state.email.trim().length > 5;
    const passwordValid = this.state.password.trim().length > 3;

    this.setState({formValid: emailValid && passwordValid});
  }

  componentDidMount() {
    this.setState({email: '', password: '', formValid: false});
    this.props.profileStore.fetchUserDetails();
  }

  signIn = async () => {
    if (
      this.props.profileStore.user.email == this.state.email &&
      this.props.profileStore.user.password == this.state.password
    ) {
      await AsyncStorage.setItem('@userToken', 'token');
      this.props.navigation.navigate(ROUTES.Home);
    } else {
      Toast.show({
        text: 'Wrong email or password',
        buttonText: 'Okay',
        duration: 3000,
      });
    }
  };

  render() {
    const isValid = this.state ? this.state.formValid : false;
    return (
      <Container>
        <Header>
          <Body>
    <Title style={{color: '#888888'}}>Sign in</Title>
          </Body>
        </Header>
        <Content>
          <View padder>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={this.onEmailChange} />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry onChangeText={this.onPasswordChange} />
              </Item>
            </Form>
          </View>
          <View padder>
            <Button block onPress={this.signIn} disabled={!isValid}>
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
