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

const FormularioDadosFamiliares = () => {
  const numeroRegex = /^\d+$/;
  const nomeRegex = /^[a-zA-ZÀ-ú ]+$/;

  const [possuiIrmaosMembros, setPossuiIrmaosMembros] = useState('');
  const [nomeIrmaosMembros, setNomeIrmaosMembros] = useState('');
  const [irmaosMembros, setIrmaosMembros] = useState([]);
  const [nomePrincRespFinan, setNomePrincRespFinan] = useState('');
  const [totalMembros, setTotalMembros] = useState('');
  const [rendaFamiliarPC, setRendaFamiliarPC] = useState('');
  const navigation = useNavigation();

  const handlePossuiIrmaosMembrosChange = () => {
    setPossuiIrmaosMembros(!possuiIrmaosMembros);
  };

  const handleAddIrmaoMembro = () => {
    setIrmaosMembros([...irmaosMembros, nomeIrmaosMembros]);
    setNomeIrmaosMembros('');
  };

  const handleNomePrincRespFinanChange = (value) => {
    if (value === '' || nomeRegex.test(value)) {
      setNomePrincRespFinan(value);
    }
  };

  const handleTotalMembrosChange = (value) => {
    if (value === '' || numeroRegex.test(value)) {
      setTotalMembros(value);
    }
  };

  const handleRendaFamiliarPCChange = (text) => {
    setRendaFamiliarPC(text);
  };

  const handleSubmit = () => {
    if (!nomePrincRespFinan || !totalMembros || !rendaFamiliarPC) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios!');
      return;
    } else {
      navigation.navigate('FormularioDadosResidenciaisEduc');
    }
  };

  return (
    <Container>
      <PaperProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header
            title={'Dados Familiares'}
            goBack={() => navigation.goBack()}
          />
          <Body>
            <Input
              label="Possui Irmãos Membros do Instituto?"
              value={possuiIrmaosMembros}
              render={(props) => (
                <Checkbox.Item
                  {...props}
                  onPress={handlePossuiIrmaosMembrosChange}
                  status={possuiIrmaosMembros ? 'checked' : 'unchecked'}
                />
              )}
            />
            <>
              <Input
                label="Nome dos Irmãos Membros"
                value={nomeIrmaosMembros}
                onChangeText={setNomeIrmaosMembros}
              />
              <Button
                mode="contained"
                onPress={handleAddIrmaoMembro}
                style={styles.button}>
                Adicionar Irmão Membro
              </Button>
              {irmaosMembros.map((irmaoMembro, index) => (
                <Input
                  key={index}
                  label={`Irmão Membro ${index + 1}`}
                  defaultValue={irmaoMembro}
                />
              ))}
            </>
            <Input
              label="Principal Responsável Financeiro"
              value={nomePrincRespFinan}
              onChangeText={handleNomePrincRespFinanChange}
            />
            <Input
              label="Total de Membros"
              value={totalMembros}
              onChangeText={handleTotalMembrosChange}
              keyboardType="numeric"
              placeholder={'Incluindo o Educando'}
            />
            <Input
              label="Renda Familiar"
              value={rendaFamiliarPC}
              onChangeText={handleRendaFamiliarPCChange}
              placeholder={'Per Capita'}
              render={(props) => (
                <TextInputMask
                  {...props}
                  type={'money'}
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: '',
                  }}
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
export default FormularioDadosFamiliares;
