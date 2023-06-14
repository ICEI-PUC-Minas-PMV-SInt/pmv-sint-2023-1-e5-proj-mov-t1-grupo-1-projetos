import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { TextInput, Checkbox } from 'react-native-paper'
import React, { useState } from 'react'
import { db } from '../../components/config'
import styles from './style'
import { addDoc, collection } from "firebase/firestore";
import Loading from '../../components/Loading'

export default function CadastroAtividade({ navigation }) {


    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const [visible, setVisible] = useState(false);

    function addTask() {
        if (nome != "" && descricao != "") {
            setVisible(true);
            addDoc(collection(db, "Atividades"), {
                nome: nome,
                descricao: descricao,
            }).then(() => {
                //Data saved succesfully
                Alert.alert('Atividade Cadastrada com sucesso');
                setVisible(false);
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
            <Loading visible={visible} />
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
