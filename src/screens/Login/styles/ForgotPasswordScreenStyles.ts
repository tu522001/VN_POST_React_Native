import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 30
        // alignItems: 'flex-end', // Căn chỉnh theo chiều ngang
    },
    image: {
        marginTop: 10,
        width: 108,
        height: 66,
        resizeMode: "contain"
    },

    image_danger: {
        width: 24,
        height: 24,
        resizeMode: "contain"
    },
    card: {
        height: 52,
        borderColor: "#DEDEE5", // Màu viền ở đây
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        paddingStart: 16

        // đổ bóngsf
        // ...Platform.select({
        //     ios: {
        //         shadowOffset: { width: 2 },
        //         shadowColor: "#333",
        //         shadowOpacity: 0.3,
        //         shadowRadius: 4,
        //     },
        //     android: {
        //         elevation: 5,
        //     },
        // }),
    },

    text_check_use_name: {
        marginStart: 5,
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 18,
        color: "#BF0404"
    },

    // thiết lập trên 1 dòng
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        // backgroundColor: "red",
        width: "90%",
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left',
    },

    views: {
        width: "100%",
        marginTop: 40
    },

    view_password: {
        width: "100%",
        marginTop: 20
    },
    img_checkbox: {
        width: 24,
        height: 24,
        resizeMode: "contain"
    },

    img_login: {
        marginTop: 20,
        width: 200,
        height: 40,
    },

    img_background: {
        marginTop: 80,
        width: 250,
        height: 250,
    },

    image_hide_and_show_password: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        position: 'absolute',
        right: 20,
        bottom: 13
    },

    text: {
        resizeMode: "contain",
        marginTop: 20,
        color: "#171725",
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left',
    }
});

