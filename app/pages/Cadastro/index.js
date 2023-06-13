import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../components/config";

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from "../../components/Logo2";


export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUp() {
        if (email != "" && password != "") {
            createUserWithEmailAndPassword(authentication, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert("Email ou senha incompatíveis")
                });
            navigation.navigate("Home")
        }
        else {
            Alert.alert("Preencha todos os campos!")
        }
    }

    return (
        <View style={styles.container}>
            <Logo style={styles.logo} />
            <Text style={styles.title}>Criar Login Para Professor</Text>
            <TextInput placeholder="Email"
                style={styles.input}
                autoCapitalize='none'
                onChangeText={(email) => { setEmail(email) }}
                keyboardType="email-address" />
            <TextInput placeholder="Senha"
                style={styles.input}
                onChangeText={(password) => { setPassword(password) }}
                secureTextEntry={true}
                minLength={6} />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={signUp}>
                <Text style={styles.button}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )

}