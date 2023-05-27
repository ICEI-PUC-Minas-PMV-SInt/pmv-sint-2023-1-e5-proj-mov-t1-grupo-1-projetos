import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native'
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
            <ScrollView>

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

                {/*Botão para cadastrar nova atividade*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => { navigation.navigate("CadastroAtividade") }}>
                    <Text style={styles.button}>Cadastrar Atividade</Text>
                </TouchableOpacity>

                {/*Botão para ver atividades cadastradas*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => { navigation.navigate("DadosAtividade") }}>
                    <Text style={styles.button}>Atividades Cadastradas</Text>
                </TouchableOpacity>

                {/*Botão para cadastrar nova turma*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => { navigation.navigate("CadastroTurma") }}>
                    <Text style={styles.button}>Cadastrar Turma</Text>
                </TouchableOpacity>

                {/*Botão para ver turmas cadastradas*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => { navigation.navigate("DadosTurma") }}>
                    <Text style={styles.button}>Turmas Cadastradas</Text>
                </TouchableOpacity>

                {/*Fazer Logout*/}
                <TouchableOpacity
                    style={styles.buttonLink}
                    onPress={signOutFunction}>
                    <Text style={styles.button}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>

    )
}
