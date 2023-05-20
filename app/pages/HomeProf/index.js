import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import Logo from '../../components/Logo'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signOut } from 'firebase/auth';
import { authentication } from '../../components/config';

export default function HomeProf({ navigation }) {

    //Página Inicial de professores

    function signOutFunction() {
        signOut(authentication).then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            Alert.alert("Tivemos um erro inesperado, tente novamente mais tarde")
        });
    }

    return (
        <View style={styles.container} >
            {/*Botão para cadastrar email*/}
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { navigation.navigate("NovaTurma") }}>
                <Text style={styles.button}>Cadastrar Nova Turma</Text>
            </TouchableOpacity>

            {/*Botão para ver os horários*/}
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { navigation.navigate("Horarios") }}>
                <Text style={styles.button}>Meus Horários</Text>
            </TouchableOpacity>

            {/*Sair*/}
            <TouchableOpacity
                style={styles.buttonLink}
                onPress={signOutFunction}>
                <Text style={styles.link}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
