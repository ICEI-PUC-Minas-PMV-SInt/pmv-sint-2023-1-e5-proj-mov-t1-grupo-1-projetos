import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import FormularioDadosEduc from '../pages/FormularioDadosEduc';
import FormularioDadosEscolares from '../pages/FormularioDadosEscolares';
import FormularioDadosFamiliares from '../pages/FormularioDadosFamiliares';
import FormularioDadosFerramentas from '../pages/FormularioDadosFerramentas';
import FormularioDadosOficinas from '../pages/FormularioDadosOficinas';
import FormularioDadosResidenciaisEduc from '../pages/FormularioDadosResidenciaisEduc';
import FormularioDadosResponsavel from '../pages/FormularioDadosResponsavel';
import DadosEduc from '../pages/DadosEduc';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
     <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="DadosEduc"
        component={DadosEduc}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FormularioDadosEduc"
        component={FormularioDadosEduc}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FormularioDadosFamiliares"
        component={FormularioDadosFamiliares}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FormularioDadosResidenciaisEduc"
        component={FormularioDadosResidenciaisEduc}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FormularioDadosEscolares"
        component={FormularioDadosEscolares}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FormularioDadosResponsavel"
        component={FormularioDadosResponsavel}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FormularioDadosOficinas"
        component={FormularioDadosOficinas}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FormularioDadosFerramentas"
        component={FormularioDadosFerramentas}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
