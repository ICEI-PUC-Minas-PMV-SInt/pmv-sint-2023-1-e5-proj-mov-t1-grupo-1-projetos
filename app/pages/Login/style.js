import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        verticalAlign: 'middle',
        marginBottom: 12,
    },
    button: {
        padding: 15,
        backgroundColor: '#F79031',
        margin: 5,
        width: 200,
        textAlign: 'center',
        borderRadius: 4,
    },
    input: {
        marginLeft: 20,
        width: "90%",
        marginTop: 20,
        padding: 10,
        height: 50,
        backgroundColor:'#fff',
        fontSize: 15,
        textAlign: 'center',

    },
    buttonLink: {
        bottom: 0,
        position: 'relative',
        marginTop: 20,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        alignItems: 'flex-end'
    },
    link: {
        fontSize: 14,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        marginTop: 10,

    }
})

export default styles