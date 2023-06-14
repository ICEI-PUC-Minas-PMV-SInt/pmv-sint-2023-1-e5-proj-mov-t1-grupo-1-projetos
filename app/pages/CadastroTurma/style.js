import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    label: {
        width: "90%",
        marginTop: 40,
        marginLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textDecorationLine: 'underline 1px solid'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    input: {
        marginLeft: 20,
        width: "90%",
        marginTop: 20,
        padding: 5,
        height: 50,
        backgroundColor:'white',
        fontSize: 15,
        borderBottomColor: 'pink'
    },
    input2: {
        marginLeft: 20,
        width: "80%",
        marginTop: 20,
        padding: 5,
        height: 50,
        backgroundColor:'#fff',
        fontSize: 14,
    },
    obrigatorio: {
        marginLeft: 20,
        fontSize: 12,
        marginTop: 5
    },
    buttonNext: {
        padding: 15,
        backgroundColor: '#F98A4B',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        textAlign: 'center',
        borderRadius: 50,
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
        marginTop: 40,
        flex: 1,
        marginBottom: 20
    },
    iconButton: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    alunoContainer: {
        marginLeft: 20,
    },
    removerAluno: {
        fontSize: 14, 
        color: 'red',
        marginLeft: 5,
        marginTop: 0,
        marginBottom: 15
    },
    alunoNome: {
        fontSize: 16
    }
})

export default styles