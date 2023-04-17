import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    selectionColor: '#FFF',
    backgroundColor: '#FFF',
    marginTop: 8,
  },
});

export default Input;
