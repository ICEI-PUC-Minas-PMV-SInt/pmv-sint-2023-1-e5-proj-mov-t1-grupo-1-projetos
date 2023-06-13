import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        verticalAlign: 'middle',
        marginBottom: 12,
        backgroundColor: '#fff'
    },
    button: {
        padding: 15,
        backgroundColor: '#F98A4B',
        margin: 5,
        width: 200,
        textAlign: 'center',
        borderRadius: 50,
        color: 'white',
        fontSize: 16,
        textTransform: 'uppercase',
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    input: {
        marginLeft: 10,
        width: "90%",
        marginTop: 20,
        padding: 10,
        height: 50,
        backgroundColor: '#fff',
        fontSize: 17,
        textAlign: 'center',
        borderColor: '#E7E7E7',
        borderWidth: 2,
        borderRadius: 50,
    },
    buttonLink: {
        bottom: 0,
        position: 'relative',
        marginTop: 20,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        alignItems: 'flex-end',
        paddingRight: 10,
        width: 150 
        },
    link: {
        fontSize: 15,
        marginTop: 1,
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        marginTop: 20,
        color: '#000008'
    },
    row: {
        width: '90%',
        alignItems: 'flex-end'
    }
})

export default styles