import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import DadosEducando from "./pages/DadosEducando"
import Main from "./pages/Main";
import Details from "./pages/Details";
import Update from "./pages/Update";
import Login  from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import HomeProf from "./pages/HomeProf";


const Stack = createStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="Cadastro"
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
        name="HomeProf"
        component={HomeProf}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="DadosEducando"
        component={DadosEducando}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="Main"
        component={Main}
        options={{
          headerTintColor: '#F79031'
        }}
        />
        <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          headerTintColor: '#F79031'
        }}
        />  
        <Stack.Screen 
        name="Update"
        component={Update}
        options={{
          headerTintColor: '#F79031'
        }}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  )}