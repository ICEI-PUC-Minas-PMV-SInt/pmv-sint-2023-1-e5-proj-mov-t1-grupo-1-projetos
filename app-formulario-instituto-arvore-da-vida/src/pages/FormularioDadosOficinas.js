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

const FormularioDadosOficinas = () => {
  const [oficinaMus, setOficinaMus] = useState('');
  const [oficinaFormHum, setOficinaFormHum] = useState('');
  const navigation = useNavigation();

  const handleOficinaFormHumChange = () => {
    setOficinaFormHum(!oficinaFormHum);
  };
  const handleOficinaMusChange = () => {
    setOficinaMus(!oficinaMus);
  };

  const handleSubmit = () => {
    console.log({
      oficinaMus,
      oficinaFormHum,
    });
    navigation.navigate('FormularioDadosFerramentas');
  };

  return (
    <Container>
      <PaperProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header title={'Oficinas'} goBack={() => navigation.goBack()} />
          <Body>
            <Input
              label="Oficina Musical"
              value={oficinaMus}
              render={(props) => (
                <Checkbox.Item
                  {...props}
                  onPress={handleOficinaMusChange}
                  status={oficinaMus ? 'checked' : 'unchecked'}
                />
              )}
            />
            <Input
              label="Oficina de Formação Humana"
              value={oficinaFormHum}
              render={(props) => (
                <Checkbox.Item
                  {...props}
                  onPress={handleOficinaFormHumChange}
                  status={oficinaFormHum ? 'checked' : 'unchecked'}
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
export default FormularioDadosOficinas;
