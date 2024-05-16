import { StyleSheet } from 'react-native';


export default StyleSheet.create({

    view_total: { flex: 1, marginTop: 10, alignItems: "center", backgroundColor: "white" },

    container: { marginStart: 20, marginEnd: 20, width: "90%", marginTop: 20 },

    inputContainer: {
        height: 52,
        borderColor: "#DEDEE5",
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        paddingStart: 16
    },

    text: {
        color: "#44444F",
        marginStart: 5,
        fontSize: 10,
        paddingTop: 5,
        lineHeight: 15
    },

    input: {
        marginStart: 15,
        marginTop: 15,
        position: "absolute",
        paddingVertical: 2,
        width: "80%",
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left',
    },


    btn_primary: {
        width: "90%",
        height: 40,
        marginStart: 20,
        marginBottom: 20
    },

    view_2: {
        width: "100%",
        position: 'absolute',
        bottom: 0,
    },

    view_1: {
        width: "100%",
        height: 52
    }



});

