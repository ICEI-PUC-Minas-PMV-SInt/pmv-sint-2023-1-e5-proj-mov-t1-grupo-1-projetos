import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import DadosEducando from "./pages/DadosEducando"
import Main from "./pages/Main";
import Details from "./pages/Details";
import Update from "./pages/Update";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import HomeProf from "./pages/HomeProf";
import DadosAtividade from "./pages/DadosAtividade";
import Atividades from "./pages/Atividades";
import CadastroAtividade from "./pages/CadastroAtividade";
import UpdateAtividade from "./pages/UpdateAtividade";
import CadastroTurma from "./pages/CadastroTurma";
import Turmas from "./pages/Turmas";
import UpdateTurma from "./pages/UpdateTurma";
import DadosTurma from "./pages/DadosTurma";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: '#FFFFFF'
          }}
        />
        <Stack.Screen
          name="Cadastrar Professor"
          component={Cadastro}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Home Professor"
          component={HomeProf}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Educandos Cadastrados"
          component={DadosEducando}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Cadastrar Educando"
          component={Main}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Update Dados"
          component={Update}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Cadastro de Atividade"
          component={CadastroAtividade}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Atividades Cadastradas"
          component={DadosAtividade}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Atividades"
          component={Atividades}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Update de Atividade"
          component={UpdateAtividade}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Cadastrar Turma"
          component={CadastroTurma}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Turmas"
          component={Turmas}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Update Turma"
          component={UpdateTurma}
          options={{
            headerTintColor: '#F79031'
          }}
        />
        <Stack.Screen
          name="Turmas Cadastradas"
          component={DadosTurma}
          options={{
            headerTintColor: '#F79031'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}