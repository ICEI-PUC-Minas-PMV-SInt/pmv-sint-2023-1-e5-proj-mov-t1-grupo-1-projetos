import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import Logo from '../../components/Logo'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signOut } from 'firebase/auth';
import { authentication } from '../../components/config';

export default function Home({ navigation }) {

    function signOutFunction() {
        signOut(authentication).then(() => {
            navigation.navigate("Login")
        }).catch((error) => {
            Alert.alert("Tivemos um erro inesperado, tente novamente mais tarde")
        });
    }

    return (
        <View style={styles.container} >
            {/*Botão para cadastrar novo professor*/}
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("Cadastro")}>
                <Text style={styles.button}>Cadastrar Professor</Text>
            </TouchableOpacity>

            {/*Botão para cadastrar novo aluno*/}
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { navigation.navigate("Main") }}>
                <Text style={styles.button}>Cadastrar Educando</Text>
            </TouchableOpacity>

            {/*Botão para ver alunos cadastrados*/}
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { navigation.navigate("DadosEducando") }}>
                <Text style={styles.button}>Educandos Cadastrados</Text>
            </TouchableOpacity>


            {/*Fazer Logout*/}
            <TouchableOpacity
                style={styles.buttonLink}
                onPress={signOutFunction}>
                <Text style={styles.link}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
