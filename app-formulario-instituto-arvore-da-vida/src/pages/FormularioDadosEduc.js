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
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';


const FormularioDadosEduc = (route) => {
  const numeroRegex = /^\d+$/;
  const nomeRegex = /^[a-zA-ZÀ-ú ]+$/;

  const navigation = useNavigation();

  const [dataEntrada, setDataEntrada] = useState('');
  const [dataSaida, setDataSaida] = useState('');
  const [nome, setNome] = useState('');
  const [fone, setFone] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [sexo, setSexo] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');
  const [certidaonasc, setCertidaoNasc] = useState('');
  const [etniaCor, setEtniaCor] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [pcd, setPCD] = useState(false);

  const handleDataEntradaChange = (text) => {
    setDataEntrada(text);
  };
  const handleDataSaidaChange = (text) => {
    setDataSaida(text);
  };

  const handleNomeChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setNome(value);
    }
  };

  const handleFoneChange = (text) => {
    setFone(text);
  };

  const handleDataNascChange = (text) => {
    setDataNasc(text);
  };

  const handleSexoChange = (text) => {
    setSexo(text);
  };

  const handleRGChange = (value) => {
    if (value === '' || numeroRegex.test(value)) {
      setRG(value);
    }
  };

  const handleCPFChange = (text) => {
    setCPF(text);
  };

  const handleCertidaoNascChange = (value) => {
    if (value === '' || numeroRegex.test(value)) {
      setCertidaoNasc(value);
    }
  };

  const handleEtniaCorChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setEtniaCor(value);
    }
  };

  const handleNaturalidadeChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setNaturalidade(value);
    }
  };

  const handlePCDChange = () => {
    setPCD(!pcd);
  };

  const handleSubmit = () => {
    if (
      !dataEntrada ||
      !nome ||
      !fone ||
      !dataNasc ||
      !sexo ||
      !cpf ||
      !sexo ||
      !etniaCor ||
      !naturalidade
    ) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
      return;
    } else {
      navigation.navigate('FormularioDadosFamiliares');
    }
  };

  return (
    <Container>
      <PaperProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header
            title={'Dados do Educando'}
            goBack={() => navigation.goBack()}
          />
          <Body>
            <Input
              label="Data de Entrada"
              value={dataEntrada}
              onChangeText={handleDataEntradaChange}
              placeholder={'dd/mm/aaaa'}
              keyboardType="numeric"
              render={(props) => (
                <TextInputMask
                  {...props}
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY',
                  }}
                />
              )}
            />

            <Input
              label="Data de Saída"
              value={dataSaida}
              onChangeText={handleDataSaidaChange}
              placeholder={'dd/mm/aaaa'}
              keyboardType="numeric"
              render={(props) => (
                <TextInputMask
                  {...props}
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY',
                  }}
                />
              )}
            />

            <Input label="Nome" value={nome} onChangeText={handleNomeChange} />

            <Input
              label="Fone"
              value={fone}
              onChangeText={handleFoneChange}
              placeholder={'(99) 9999-9999 ou (99) 99999-9999'}
              keyboardType="numeric"
              render={(props) => (
                <TextInputMask
                  {...props}
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                />
              )}
            />

            <Input
              label="Data de Nascimento"
              value={dataNasc}
              onChangeText={handleDataNascChange}
              keyboardType="numeric"
              placeholder={'dd/mm/aaaa'}
              render={(props) => (
                <TextInputMask
                  {...props}
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY',
                  }}
                />
              )}
            />

            <Input label="Sexo" value={sexo} onChangeText={handleSexoChange} />

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

            <Input
              label="Certidão de Nascimento"
              value={certidaonasc}
              onChangeText={handleCertidaoNascChange}
              keyboardType="numeric"
            />

            <Input
              label="Etnia/Cor"
              value={etniaCor}
              onChangeText={handleEtniaCorChange}
            />

            <Input
              label="Naturalidade"
              value={naturalidade}
              onChangeText={handleNaturalidadeChange}
            />

            <Input
              label="Pessoa com Deficência?"
              value={pcd}
              render={(props) => (
                <Checkbox.Item
                  {...props}
                  onPress={handlePCDChange}
                  status={pcd ? 'checked' : 'unchecked'}
                />
              )}
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
export default FormularioDadosEduc;
