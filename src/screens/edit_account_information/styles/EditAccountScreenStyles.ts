import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    supper_view: {
        marginTop: 10
    },
    total_view1: {
        backgroundColor: "white"
    },

    view_row_1: {
        flexDirection: "row", alignItems: "center"
    },
    view_child_1: {
        height: 45, justifyContent: "space-between"
    },

    text_login: {
        marginStart: 20, marginTop: 12, color: "#171725", fontSize: 14, lineHeight: 22, fontWeight: "400"
    },

    view_text_admin:
    {
        flex: 1, alignItems: "flex-end"
    },

    text_admin: { marginEnd: 20, marginTop: 12, color: "#171725", fontSize: 14, lineHeight: 22, fontWeight: "400" },

    container: {
        marginStart: 20,
        marginEnd: 20,
        width: "90%",
        marginTop: 20
    },

    inputContainer: {
        height: 52,
        borderColor: "#DEDEE5",
        backgroundColor: "#DEDEE5",
        borderRadius: 8,
        borderWidth: 1,
        paddingStart: 16
    },

    text: {
        color: "#44444F",
        marginStart: 5,
        fontSize: 10,
        paddingTop: 5
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

    image_1: { width: '90%', height: 1, marginStart: 20, marginEnd: 20 },

    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30,
    },
    outerCircle: {
        height: 24,
        width: 24,
        borderRadius: 40,
        borderWidth: 20, // Tăng độ dày của viền lên
        // borderColor: 'red', // Đặt màu viền là màu đỏ
        backgroundColor: 'white', // Phần trung tâm trong suốt
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedOuterCircle: {
        borderColor: '#3B76AC', // Giữ nguyên màu viền màu đỏ
    },
    innerCircle: {
        height: 16, // Giảm kích thước của phần màu xanh
        width: 16,
        borderRadius: 8,
        backgroundColor: 'white', // Phần ca su màu xanh
    },

});

