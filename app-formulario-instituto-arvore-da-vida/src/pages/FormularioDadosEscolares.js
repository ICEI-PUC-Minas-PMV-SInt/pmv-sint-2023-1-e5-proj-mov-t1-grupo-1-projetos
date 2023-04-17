import React, { useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import Container from './../components/Container';
import {
  Provider as PaperProvider,
  DefaultTheme,
  Button,
} from 'react-native-paper';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';
import { useNavigation } from '@react-navigation/native';

const FormularioDadosEscolares = () => {
  const [anoEscolar, setAnoEscolar] = useState('');
  const [salaTurma, setSalaTurma] = useState('');
  const [turno, setTurno] = useState('');
  const [nomeEscola, setNomeEscola] = useState('');
  const navigation = useNavigation();

  const handleAnoEscolarChange = (text) => {
    setAnoEscolar(text);
  };

  const handleSalaTurmaChange = (text) => {
    setSalaTurma(text);
  };

  const handleTurnoChange = (text) => {
    setTurno(text);
  };

  const handleNomeEscolaChange = (text) => {
    setNomeEscola(text);
  };

  const handleSubmit = () => {
    if (!anoEscolar || !salaTurma || !turno || !nomeEscola) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
      return;
    } else {
      navigation.navigate('FormularioDadosResponsavel');
    }
  };

  return (
    <Container>
      <PaperProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header
            title={'Dados Escolares'}
            goBack={() => navigation.goBack()}
          />
          <Body>
            <Input
              label="Nome da Escola"
              value={nomeEscola}
              onChangeText={handleNomeEscolaChange}
            />
            <Input
              label="Ano Escolar"
              value={anoEscolar}
              onChangeText={handleAnoEscolarChange}
            />
            <Input
              label="Sala/Turma"
              value={salaTurma}
              onChangeText={handleSalaTurmaChange}
            />
            <Input
              label="Turno"
              value={turno}
              onChangeText={handleTurnoChange}
            />

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles.button}>
              Seguinte
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
export default FormularioDadosEscolares;
