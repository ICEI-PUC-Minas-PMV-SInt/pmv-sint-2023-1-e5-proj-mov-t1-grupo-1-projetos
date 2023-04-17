import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/UserContext';
import Main from './src/navigations/Main';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
