import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { db } from "../../components/config";
import styles from "./style";
import { doc, getDoc } from 'firebase/firestore';
import { FontAwesome } from "@expo/vector-icons";
import Loading from "../../components/Loading";

export default function Turmas({ navigation, route }) {

    const idTask = route.params.id;
    const [details, setDetails] = useState([])
    const [alunos, setAlunos] = useState(route.params.alunos)
    const docRef = doc(db, "Turmas", idTask);
    const commaSep = alunos.map(item => item).join(', ');

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
                {/*Mostrar dados dos alunos*/}
                <Text style={styles.label}>Dados da Turma</Text>
                <Text style={styles.details}><Text style={styles.datas}>Nome:</Text> {details.nome}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Descrição:</Text> {details.descricao}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Atividade:</Text> {details.atividadeSelecionada}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Horário: </Text> {details.horario}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Dias: </Text> {details.dias}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Turno: </Text> {details.turno}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Alunos: </Text> {commaSep}</Text>
                <Text style={styles.details}><Text style={styles.datas}>Professor: </Text> {details.professor}</Text>

                <View style={styles.container}>
                </View>

                {/*Botão para editar cadastro*/}
                <TouchableOpacity
                    style={styles.buttonNewTask}
                    onPress={() => {
                        navigation.navigate("Update Turma", {
                            id: idTask,
                            nome: details.nome,
                            descricao: details.descricao,
                            atividadeSelecionada: details.atividadeSelecionada,
                            horario: details.horario,
                            dias: details.dias,
                            turno: details.turno,
                            alunos: alunos,
                            professor: details.professor,

                        })
                    }}>
                    <Text style={styles.iconButton}>Editar Cadastro da Turma</Text>
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