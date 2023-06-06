import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
        textDecorationLine: 'underline 1px solid'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'

    },
    details: {
        marginLeft: 20,
        fontSize: 18,
        marginBottom:10,
    },
    datas: {
        fontWeight: "bold",

    },
    buttonNewTask: {
        padding: 15,
        backgroundColor: '#F98A4B',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 250,
        textAlign: 'center',
        borderRadius: 50,
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
        marginTop: 10,
        flex: 1,
        marginBottom: 10
    },
    iconButton: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        shadowColor: 'grey',
    },
})

export default styles