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
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {ROUTES} from '../../routes';

class HomeScreen extends React.Component<NavigationStackScreenProps> {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{color: '#888888'}}>
              Welcome back
            </Title>
          </Body>
        </Header>
        <Content>
          <View padder>
            <H2>Full Name</H2>
          </View>
          <View padder>
          <Button
            block
            warning
            onPress={() => this.props.navigation.navigate(ROUTES.RootAuth)}>
            <Text>Logout</Text>
          </Button>
          </View>
        </Content>       
      </Container>
    );
  }
}

export default HomeScreen;
