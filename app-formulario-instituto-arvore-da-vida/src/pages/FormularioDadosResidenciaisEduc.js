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

const FormularioDadosResidenciaisEduc = () => {
  const numeroRegex = /^\d+$/;
  const nomeRegex = /^[a-zA-ZÀ-ú ]+$/;

  const [rua, setRua] = useState('');
  const [beco, setBeco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [tipoResidencia, setTipoResidencia] = useState('');
  const navigation = useNavigation();

  const handleRuaChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setRua(value);
    }
  };

  const handleBecoChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setBeco(value);
    }
  };

  const handleNumeroChange = (value) => {
    if (value === '' || numeroRegex.test(value)) {
      setNumero(value);
    }
  };

  const handleBairroChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setBairro(value);
    }
  };

  const handleTipoResidenciaChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setTipoResidencia(value);
    }
  };

  const handleSubmit = () => {
    if (!rua || !numero || !bairro || !tipoResidencia) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
      return;
    } else {
      navigation.navigate('FormularioDadosEscolares');
    }
  };

  return (
    <Container>
      <PaperProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header
            title={'Dados Residenciais do Educando'}
            goBack={() => navigation.goBack()}
          />
          <Body>
            <Input label="Rua" value={rua} onChangeText={handleRuaChange} />
            <Input label="Beco" value={beco} onChangeText={handleBecoChange} />
            <Input
              label="Número"
              keyboardType="numeric"
              value={numero}
              onChangeText={handleNumeroChange}
            />
            <Input
              label="Bairro"
              value={bairro}
              onChangeText={handleBairroChange}
            />
            <Input
              label="Tipo de Residência"
              value={tipoResidencia}
              onChangeText={handleTipoResidenciaChange}
              placeholder={'Alugada / Própria / Cedida / Outros'}
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
export default FormularioDadosResidenciaisEduc;
