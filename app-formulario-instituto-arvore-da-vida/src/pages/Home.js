import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Container from './../components/Container';
import {
  Provider as PaperProvider,
  DefaultTheme,
  Button,
} from 'react-native-paper';
import Body from './../components/Body';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <PaperProvider theme={theme}>
        <View style={styles.header}>
          <Logo />
        </View>
        <Body>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('FormularioDadosEduc')}
            style={styles.button}>
            Cadastrar Novo Educando
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('DadosEduc')}
            style={styles.button}>
            Educandos Cadastrados
          </Button>
        </Body>
      </PaperProvider>
    </Container>
  );
};
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000', // cor primária
    accent: '#03dac4', // cor de destaque
    background: '#f6f6f6', // cor de fundo
    text: '#333333', // cor do texto
    placeholder: '#888888', // cor do texto do placeholder
    error: '#B00020', // cor do erro
  },
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
});
export default Home;
