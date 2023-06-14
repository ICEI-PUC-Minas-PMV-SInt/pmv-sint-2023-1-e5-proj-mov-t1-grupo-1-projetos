import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { db } from "../../components/config";
import styles from "./style"
import { doc, collection, getDocs, deleteDoc, getDoc, query } from 'firebase/firestore';
import { FontAwesome } from "@expo/vector-icons";
import Loading from "../../components/Loading";

export default function Atividades({ navigation, route }) {

    const idTask = route.params.id;
    const [details, setDetails] = useState([])
    const docRef = doc(db, "Atividades", idTask);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const fetchQuery = async () => {
            const storeData = getDoc(docRef);

            if (storeData) {
                setDetails((await storeData).data());
                setVisible(false);
            } else {

            }
        }
        fetchQuery()
    }, [idTask])


    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Loading visible={visible} />
                {/*Mostrar dados das atividades*/}
                <Text style={styles.label}>Dados da Atividade</Text>
                <Text style={styles.details}><Text style={styles.datas}>Nome:</Text> {details.nome}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Descrição:</Text> {details.descricao}</Text>

                <View style={styles.container}>
                </View>

                {/*Botão para editar cadastro*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => {
                        navigation.navigate("Update de Atividade", {
                            id: idTask,
                            nome: details.nome,
                            descricao: details.descricao,
                        })
                    }}>
                    <Text style={styles.iconButton}>Editar Cadastro da Atividade</Text>
                </TouchableOpacity>

                {/*Botão para voltar para página inicial*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => { navigation.navigate("Home") }}>
                    <Text style={styles.iconButton}>Página Inicial</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}