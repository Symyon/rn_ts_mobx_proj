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

class CreateAccount extends React.Component<NavigationStackScreenProps>  {
	render() {
        return (<Container>
            <Header>
              <Body>
                <Title style={{color: '#888888'}}>
                  Create an account
                </Title>
              </Body>
            </Header>
            <Content>
              {/* {this.props.loginForm} */}
              <Form>
              <Item floatingLabel>
                  <Label>Full Name</Label>
                  <Input />
                </Item>
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
                  onPress={() => {
                    this.props.navigation.goBack(null);
                  }}>
                  <Text>Register Account</Text>
                </Button>
              </View>
            </Content>
          </Container>);
    }
}

export default CreateAccount;