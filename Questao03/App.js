
import React, { useState } from 'react';
import { Container, 
  Header,
  Content,
  Form, 
  Label,
  Item,
  Text, 
  Input
 } from 'react-native';

export default function App() {

  const [nome, setNome] = useState("");

  return (
    <Container>
      <Header />
      <Content>
        <Text>Qual o seu Nome? </Text>
        <Form>
          <Item Regular>
            <Label />
            <Input type="text" placeholder='Ex: Ivan' onChangeText={(text) => setNome(text)} />
          </Item>
        </Form>
        <Text > Seja Bem vindo, {nome} !</Text>
      </Content>
    </Container>
  );
}
