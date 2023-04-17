import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = ({ title, goBack }) => {
  return (
    <Appbar.Header
     style={styles.header}>
     {
        goBack && 
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title} />    
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingBottom: 20,
    
  },
});
export default Header;
