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
        padding: 20,
        backgroundColor: '#F79031',
        margin: 5,
        width: 270,
        textAlign: 'center',
        borderRadius: 4, 
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 15,
        textTransform: 'uppercase'
    },
    buttonLink: {
        bottom: 0,
        position: 'relative',
        marginTop: 20,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textAlign: 'center',
        left: 0
    },
    link: {
        fontSize: 18
    }
})

export default styles