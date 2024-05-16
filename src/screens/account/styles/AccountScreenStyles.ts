import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    view_sroll: { backgroundColor: "white", height: 350 },
    view_1: { flexDirection: 'row', justifyContent: "center", alignItems: 'center', },
    view_1_1: { flex: 2, alignItems: 'center', marginTop: 80 },
    image_1_1: { width: 88, height: 88, borderRadius: 60, marginStart: 50 },
    image_1_2: { width: 36, height: 36, position: 'absolute', marginTop: 50, right: 100 },
    view_2: { marginEnd: 20 },
    image_2_1: { width: 24, height: 24 },
    view_3: { justifyContent: "center", alignItems: 'center' },
    text_username: { fontWeight: '500', fontSize: 20, lineHeight: 30, color: "#0A2745" },
    text_phone: { color: "#92929D", fontSize: 14, fontWeight: '400', lineHeight: 22 },
    view_4: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 },
    view_4_1: { width: 160, height: 82, backgroundColor: '#FFE8D180', borderRadius: 8, marginStart: 20 },
    text_course_number: { textAlign: 'center', lineHeight: 36, fontSize: 24, color: "#B27A03", fontWeight: '500', marginTop: 10 },
    text_course: { textAlign: 'center', lineHeight: 22, fontSize: 14, color: "#44444F", fontWeight: '400' },
    view_4_2: { width: 160, height: 82, backgroundColor: '#E9F2FC80', borderRadius: 8, marginEnd: 20 },
    text_average_score: { textAlign: 'center', lineHeight: 36, fontSize: 24, color: "#114277", fontWeight: '500', marginTop: 10 },
    text_medium_score: { textAlign: 'center', lineHeight: 22, fontSize: 14, color: "#44444F", fontWeight: '400' },
    view_item_flatlist: { flexDirection: "row", alignItems: "center", backgroundColor: "white", height: 60, width: "100%", marginTop: 1, marginStart: 15 },
    image1_item_flatlist: { width: 24, height: 24, marginStart: 24 },
    text_item_flatlist: { marginStart: 24, color: "#0A2745", fontSize: 16, fontWeight: '500', lineHeight: 24 },
    image2_item_flatlist: { width: 24, height: 24, marginLeft: 'auto', marginEnd: 50 },
    view_total_2: { marginTop: 10, backgroundColor: "white", height: 500 }
});

