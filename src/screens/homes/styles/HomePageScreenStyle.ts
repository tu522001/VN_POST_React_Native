import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#f5f5f5",
        // paddingTop: Platform.OS === "android" ? 25 : 0,
    },
    item_container_outstanding_course: {
        top: 20,
        marginBottom: 15,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 8,
        flexDirection: "row", // Sắp xếp các phần tử theo chiều ngang
        width: "97%",
        height: 90
    },

    title_outstanding_course: {
        marginStart: 20,
        marginEnd: 20,
        color: "#0A2745",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 22,
        maxHeight: 44, // Số dòng tối đa (22px * 2 dòng)

    },
    description_outstanding_course: {
        marginTop: 2,
        marginStart: 10,
        marginEnd: 40,
        fontSize: 12,
        fontWeight: "600",
        color: "#0C1E34",
        lineHeight: 18,
        maxHeight: 44, // Số dòng tối đa (22px * 2 dòng)
        overflow: "hidden", // Ẩn nội dung bị tràn ra khỏi khung
    },

    item_container_news: {
        marginEnd: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        width: 200,
        height: 203
    },

    image: {
        width: 120,
        height: 70,
        borderRadius: 8,
        resizeMode: "cover", // đảm bảo rằng hình ảnh trong khung hiển thị không bị biến dạng.
    },

    item_image_outstanding_course: {
        width: 200,
        height: 106,
        borderRadius: 8,
        resizeMode: "cover", // đảm bảo rằng hình ảnh trong khung hiển thị không bị biến dạng.
    },

    text_outstanding_course: {

        marginBottom: 30,
        flex: 1, // Phần còn lại của View sẽ được dành cho textContainer
        justifyContent: "space-between", // Các phần tử trong textContainer sẽ được căn giữa
    },

    view_contraint: {
        marginTop: 10,
        flexDirection: "row",
    },

    textContainer: {
        marginBottom: 30,
        flex: 1, // Phần còn lại của View sẽ được dành cho textContainer
        justifyContent: "space-between", // Các phần tử trong textContainer sẽ được căn giữa
    },
    title: {
        start: 12,
        end: 15,
        color: "#0A2745",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 22,
        maxHeight: 44, // Số dòng tối đa (22px * 2 dòng)

    },
    description: {
        start: 12,
        end: 15,
        fontSize: 12,
        color: "gray",
        lineHeight: 18,
        maxHeight: 44, // Số dòng tối đa (22px * 2 dòng)
        overflow: "hidden", // Ẩn nội dung bị tràn ra khỏi khung
    },
    image_avatar: {
        height: 48,
        width: 48,
        marginBottom: 20,
        marginTop: 20,
        marginStart: 20,
        borderRadius: 50
    }
});