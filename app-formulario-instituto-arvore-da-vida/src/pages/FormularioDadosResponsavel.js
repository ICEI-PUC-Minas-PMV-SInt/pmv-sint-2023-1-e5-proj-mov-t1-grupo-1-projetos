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
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';

const FormularioDadosResponsavel = () => {
  const numeroRegex = /^\d+$/;
  const nomeRegex = /^[a-zA-ZÀ-ú ]+$/;

  const [nome, setNome] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');
  const navigation = useNavigation();

  const handleNomeChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setNome(value);
    }
  };

  const handleRGChange = (value) => {
    if (value === '' || numeroRegex.test(value)) {
      setRG(value);
    }
  };

  const handleCPFChange = (text) => {
    setCPF(text);
  };

  const handleSubmit = () => {
    if (!nome || !rg || !cpf) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
      return;
    } else {
      navigation.navigate('FormularioDadosOficinas');
    }
  };

  return (
    <Container>
      <PaperProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header
            title={'Dados do Responsável'}
            goBack={() => navigation.goBack()}
          />
          <Body>
            <Input label="Nome" value={nome} onChangeText={handleNomeChange} />

            <Input
              label="RG"
              value={rg}
              onChangeText={handleRGChange}
              keyboardType="numeric"
            />

            <Input
              label="CPF"
              value={cpf}
              onChangeText={handleCPFChange}
              keyboardType="numeric"
              render={(props) => <TextInputMask {...props} type={'cpf'} />}
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
export default FormularioDadosResponsavel;
