import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ScrollView } from 'react-native';
import Container from './../components/Container';
import {
  Provider as PaperProvider,
  DefaultTheme,
  List,
} from 'react-native-paper';
import Header from './../components/Header';
import Body from './../components/Body';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

const DadosEduc = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [dadoseduc, setDadoseduc] = useState([]);

  useEffect(() => {
    getDadoseduc().then((dados) => {
      setDadoseduc(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item title={item.id + ' ' + item.nome} />
  );

  return (
    <Container>
      <PaperProvider theme={theme}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header
            title={'Dados do Educando'}
            goBack={() => navigation.goBack()}
          />
          <Body>
            <FlatList
              data={dadoseduc}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              onPress={() =>
              navigation.navigate('FormularioDadosEduc', { item })
              }
            />
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
});
export default DadosEduc;
