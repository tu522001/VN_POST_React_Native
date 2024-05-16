import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from '@react-navigation/stack';


interface TestScreenProps {
    navigation: StackNavigationProp<any>;
}


const TestScreen: React.FC<TestScreenProps> = ({ navigation }) => {

    function handleOnClickExamTheExam() {
        navigation.navigate('ExamEntranceScreen');
    }

    return (
        <View style={{ flex: 1, top: 10, height: "100%", width: "100%", backgroundColor: "white" }}>

            <View style={{ alignContent: "center", justifyContent: "center", top: 20 }}>
                <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 16, lineHeight: 24, color: "#171725" }}>Bài thi số 1  câu hỏi trắc nghiệm cuộc thi {"\n"} tháng 5</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", top: 30 }}>
                <View style={{ end: 30 }}>
                    <Text style={{ color: "#144E8C", fontSize: 14, lineHeight: 22, fontWeight: 600, textAlign: "center" }}>10</Text>
                    <Text style={{ color: "#696974", fontSize: 12, lineHeight: 18, fontWeight: 400 }}>Lượt thi còn lại</Text>
                </View>

                <View style={{ width: 1, height: 20, backgroundColor: "#DEDEE5" }}>

                </View>

                <View style={{ start: 30 }}>
                    <Text style={{ color: "#144E8C", fontSize: 14, lineHeight: 22, fontWeight: 600, textAlign: "center" }}>60</Text>
                    <Text style={{ color: "#696974", fontSize: 12, lineHeight: 18, fontWeight: 400 }}>Thời gian {"(phút)"}</Text>
                </View>
            </View>

            <TouchableOpacity style={{
                position: "absolute",
                left: "30%",
                top: 60,
                width: 159,
                height: 40,
                borderRadius: 8,
                backgroundColor: "#FCB71E",
                alignItems: "center",
                justifyContent: "center"
            }} onPress={handleOnClickExamTheExam}>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text style={{ color: "#171725", fontSize: 16, lineHeight: 24, fontWeight: "500" }}> Đăng ký thi</Text>
                </View>
            </TouchableOpacity>

        </View >
    )
}

export default TestScreen
