import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 30
    },
    image: {
        marginTop: 70,
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
        // backgroundColor: "green",
        borderColor: "#DEDEE5",
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        paddingStart: 16
    },
    text_check_use_name: {
        marginStart: 5,
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 18,
        color: "#BF0404"
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 2,
        width: "80%",
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left',
    },
    text_login: {
        fontSize: 10,
        paddingTop: 7
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
    view_3: {
        width: "100%",
        marginTop: 20,
        flexDirection: 'row',
    },
    text_memorize: {
        marginStart: 10,
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left',
    },
    text_forgot_password: {
        marginStart: 90,
        alignItems: "center",
        // alignItems: 'flex-end',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 22,
        textAlign: 'left',
        color: "#144E8C"
    },
    img_login: {
        marginTop: 40,
        width: 200,
        height: 40,
    },
    img_background: {
        marginTop: 40,
        width: 250,
        height: 250,
    },
    image_hide_and_show_password: {
        width: 20,
        height: 20,
        // Xác định cách mà hình ảnh sẽ điều chỉnh kích thước và cắt cụ thể trong khung hiển thị của nó.
        // Trong trường hợp này, 'contain' đảm bảo rằng hình ảnh sẽ được hiển thị toàn bộ mà không bị biến dạng.
        resizeMode: "contain",
        // Xác định cách mà phần tử sẽ được định vị trong không gian của mẹ container.
        //  Trong trường hợp này, 'absolute' đặt phần tử theo tọa độ tuyệt đối dựa trên khung hiển thị của mẹ container.
        position: 'absolute',
        right: 20,
        bottom: 13
    },
});

// export default styles;
