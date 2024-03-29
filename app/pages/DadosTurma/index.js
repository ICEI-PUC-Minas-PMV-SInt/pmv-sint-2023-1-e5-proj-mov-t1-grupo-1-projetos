import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { db } from "../../components/config";
import styles from "./style"
import { doc, collection, getDocs, deleteDoc, orderBy, where, query } from 'firebase/firestore';
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Loading from "../../components/Loading";

export default function DadosTurma({ navigation }) {
  //state que vai receber as nossas tasks quando carregar
  const [task, setTask] = useState('')
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);

  const showConfirmDialog = (id) => {
    return Alert.alert(
      "Deletar",
      "Tem certeza que quer deletar esse cadastro?",
      [
        // The "Yes" button
        {
          text: "Sim",
          onPress: () => {
            deleteTask(id)
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "Não",
        },
      ]
    );
  };


  //carregar toda vez que carreagar os elementos
  const userRef = collection(db, "Turmas");

  useEffect(() => {
    setVisible(true);
    if (search === '') {
      getDocs(query(userRef, orderBy("nome"))).then(docSnap => {
        let list = [];
        docSnap.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id })
        })
        setTask(list);
      })
    } else {

    }
    setVisible(false);
  })

   //procura por usuário
  function handleSearch() {
    setVisible(true);
    setTask(
      getDocs(query(userRef, where("nome", "==", search))).then(docSnap => {
        let list = [];
        docSnap.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id })
        })
        setTask(list);
        setVisible(false);
      }
      )
    ), [search]
  }


  //delete data
  function deleteTask(id) {
    deleteDoc(doc(db, "Turmas", id));
    navigation.navigate("Home Professor")
  }

  return (
    <View style={styles.container}>
      <Loading visible={visible} />
      <View style={styles.search}>
        <TextInput
          style={styles.searchArea}
          placeholder="Pesquisar Aluno (nome completo)"
          placeholderTextColor="#888"
          value={search}
          onChangeText={(t) => setSearch(t)}
        />

        <TouchableOpacity
          onPress={() => { handleSearch() }}
        >
          <FontAwesome
            name="search"
            size={23}
            color="orange"
          ></FontAwesome>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              {/* Botão de deletar o usuário*/}
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => showConfirmDialog(item.id)}
              >
                <FontAwesome
                  name="trash"
                  size={23}
                  color="orange"
                >
                </FontAwesome>
              </TouchableOpacity>

              {/*Usuário*/}
              <Text
                style={styles.DescriptionTask}
                onPress={() =>
                  navigation.navigate("Turmas", {
                    id: item.id,
                    alunos: item.alunos
                  })
                }
              >
                {item.nome}
              </Text>

            </View>
          )
        }}
      />
    </View>
  )
}