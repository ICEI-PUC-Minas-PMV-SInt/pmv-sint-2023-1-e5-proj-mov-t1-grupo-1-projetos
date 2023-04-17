import React, { useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import Container from './../components/Container';
import {
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  Checkbox,
} from 'react-native-paper';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';
import { useNavigation } from '@react-navigation/native';

const FormularioDadosFerramentas = () => {
  const [internet, setInternet] = useState('');
  const [aparelho, setAparelho] = useState('');
  const navigation = useNavigation();

  const handletInternetChange = () => {
    setInternet(!internet);
  };
  const handleAparelhoChange = () => {
    setAparelho(!aparelho);
  };

  const handleSubmit = () => {
    Alert.alert('Sucesso', 'Dados enviados com sucesso!');
    navigation.navigate('Home');

  };

  return (
    <Container>
      <PaperProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header title={'Ferramentas'} goBack={() => navigation.goBack()} />
          <Body>
            <Input
              label="Internet"
              value={internet}
              render={(props) => (
                <Checkbox.Item
                  {...props}
                  onPress={handletInternetChange}
                  status={internet ? 'checked' : 'unchecked'}
                />
              )}
            />
            <Input
              label="Dispositivo para Aulas Online"
              value={aparelho}
              render={(props) => (
                <Checkbox.Item
                  {...props}
                  onPress={handleAparelhoChange}
                  status={aparelho ? 'checked' : 'unchecked'}
                />
              )}
            />
            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}>
              Enviar
            </Button>
          </Body>
        </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#000000',
  },
});
export default FormularioDadosFerramentas;
