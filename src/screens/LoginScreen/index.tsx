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
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {ROUTES} from '../../routes';

class LoginScreen extends React.Component<NavigationStackScreenProps> {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{color: '#888888'}}>
              Sing in
            </Title>
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
              onPress={() => this.props.navigation.navigate(ROUTES.Home)}>
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
