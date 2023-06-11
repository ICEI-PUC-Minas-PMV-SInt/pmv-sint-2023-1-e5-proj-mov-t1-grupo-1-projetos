import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { addDoc, collection } from "firebase/firestore";

export default function CadastroAtividade({ navigation }) {


    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')



    function addTask() {
        if (nome != "" && descricao != "") {
            addDoc(collection(db, "Atividades"), {
                nome: nome,
                descricao: descricao,
            }).then(() => {
                //Data saved succesfully
                Alert.alert('Atividade Cadastrada com sucesso');
            }).catch((error) => {
                console.log(error);
            })
            navigation.navigate("Home")
        }
        else {
            Alert.alert("Preencha todos os dados obrigatórios")
        }
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Formulário da Atividade</Text>

            {/* Nome*/}
            <TextInput
                style={styles.input}
                placeholder='Nome'
                theme={{
                    colors: {
                        placeholder: 'grey', text: 'black', primary: '#FF5E5E',
                        underlineColor: 'transparent', background: '#003489',
                    }
                }}
                onChangeText={(nome) => { setNome(nome) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            {/* Descricao*/}
            <TextInput
                style={styles.input}
                placeholder='Descrição'
                theme={{
                    colors: {
                        placeholder: 'grey', text: 'black', primary: '#FF5E5E',
                        underlineColor: 'transparent', background: '#003489',
                    }
                }}
                onChangeText={(descricao) => { setDescricao(descricao) }}
            />
            <Text style={styles.obrigatorio}>*obrigatório</Text>

            <TouchableOpacity
                style={styles.buttonNext}
                onPress={() => { addTask() }}
            >
                <Text style={styles.iconButton}>Cadastrar Atividade</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
