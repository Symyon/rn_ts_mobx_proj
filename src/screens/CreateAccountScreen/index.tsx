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
  Icon,
} from 'native-base';
import {observer, inject} from 'mobx-react';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../../models/User';
import {ROUTES} from '../../routes';

export interface Props {
  navigation: any;
  profileStore: any;
}
export interface State {}

@inject('profileStore')
@observer
class CreateAccount extends React.Component<Props, State> {
  signUp = async () => {
    await AsyncStorage.setItem('@userToken', 'token');
    this.props.profileStore.settleUserDetails();
    this.props.profileStore.refreshStore();    
    this.props.navigation.navigate(ROUTES.Home);
  };

  render() {
    const profileStore = this.props.profileStore;
    const formValid = profileStore.isFormValid;
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{color: '#888888'}}>Create an account</Title>
          </Body>
        </Header>
        <Content>
          <View padder>
            <Form>
              <Item floatingLabel success={profileStore.fullNameValid}>
                <Label>Full Name</Label>
                <Input onChangeText={e => profileStore.fullNameOnChange(e)} />
                <Icon
                  name={profileStore.fullNameValid ? 'checkmark-circle' : ''}
                />
              </Item>
              <Item floatingLabel success={profileStore.emailValid}>
                <Label>Email</Label>
                <Input onChangeText={e => profileStore.emailOnChange(e)} />

                <Icon
                  name={profileStore.emailValid ? 'checkmark-circle' : ''}
                />
              </Item>
              <Item floatingLabel last success={profileStore.passwordValid}>
                <Label>Password</Label>
                <Input
                  secureTextEntry
                  onChangeText={e => profileStore.passwordOnChange(e)}
                />
                <Icon
                  name={profileStore.passwordValid ? 'checkmark-circle' : ''}
                />
              </Item>
            </Form>
          </View>
          <View padder>
            <Button block onPress={this.signUp} disabled={!formValid}>
              <Text>Register Account</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default CreateAccount;
