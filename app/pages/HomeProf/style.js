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
    buttonLink: {
        bottom: 0,
        position: 'relative',
        marginTop: 20,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    link: {
        fontSize: 18
    }
})

export default styles
