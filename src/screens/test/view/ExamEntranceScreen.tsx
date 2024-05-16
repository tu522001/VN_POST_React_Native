import { View, StyleSheet, FlatList, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from '@react-navigation/stack';
import { time_circle, btn_pre_1, btn_next_1, btn_back } from "../../../assets/images/ExamEntranceScreenImage"
import useCountdownTimer from '../viewmodel/ExamEntranceScreenViewModel';
import { data } from "../../../data/models/ExamEntranceModel"

interface ExamEntranceProps {
    navigation: StackNavigationProp<any>;
}
interface ListItem {
    id: number;
    text: string;
}

const ExamEntranceScreen: React.FC<ExamEntranceProps> = ({ navigation }) => {
    const initialTime = 15 * 60; // 15 phút
    const { timeLeft, formatTime, selectBackgroundColorsItem, setSelectBackgroundColorsItem, handleSelectBackgroundColorsItem, flatListRef, handleNext, handlePrevious } = useCountdownTimer(initialTime);


    function handleItemClick(data: ListItem) {
        // Xử lý sự kiện khi một mục được nhấp vào
        console.log("Item clicked:", data);
        handleSelectBackgroundColorsItem(data.id)
    };


    return (
        <View style={{ flex: 1, top: 10, height: "100%", width: "100%", }}>

            <View style={{ backgroundColor: "white", height: 80, width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ marginTop: 10, marginStart: 10 }}>
                        <Image source={btn_back} style={{ width: 24, height: 24 }} />
                    </View>
                </TouchableOpacity>

                <View style={{ marginEnd: 15, backgroundColor: "#144E8C", width: 90, height: 36, borderRadius: 8, marginTop: 10, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 14, lineHeight: 22, fontWeight: "600" }}>Nộp bài</Text>
                </View>

            </View>

            <View style={{ width: "100%", height: "90%", backgroundColor: "white", top: 10 }}>
                <View style={{ borderRadius: 8, alignItems: "center", justifyContent: "center", start: 10, width: 164, top: 30, height: 40, backgroundColor: "#FFE8D1", flexDirection: "row" }}>
                    <View>
                        <Image source={time_circle} style={{ height: 24, width: 24, end: 10 }} />
                    </View>
                    <View>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 20, lineHeight: 30,
                            color: '#B27A03', // Màu chữ giống trong hình
                            fontWeight: '500',
                        }}>{formatTime(timeLeft)}</Text>
                    </View>


                </View>
                <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", bottom: 8 }}>
                    <TouchableOpacity onPress={handlePrevious}>
                        <View>
                            <Image style={{ height: 40, width: 40, end: 35 }} source={btn_pre_1} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleNext}>
                        <View>
                            <Image style={{ height: 40, width: 40, end: 15 }} source={btn_next_1} />
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{
                    height: "7%",
                    backgroundColor: "white",
                    bottom: 15,
                    position: "absolute",
                    flex: 1,
                    left: 1,
                    right: 1,
                }}>


                    <View style={{ width: "100%", height: 2, backgroundColor: "#F1F1F5", bottom: 17 }} />
                    < FlatList
                        ref={flatListRef}
                        horizontal={true}
                        nestedScrollEnabled={true}
                        showsHorizontalScrollIndicator={false} // ẩn vector scroll  theo chiều ngang
                        data={data}

                        //  renderItem : là một hàm được gọi kiểm tra id của mỗi mục
                        renderItem={({ item }) => {


                            return (
                                <TouchableOpacity onPress={() => handleItemClick(item)}>

                                    <View style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 50,
                                        borderWidth: 2,
                                        borderColor: item.id === selectBackgroundColorsItem ? "#699DC8" : "transparent",
                                        backgroundColor: "transparent",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginLeft: 10, // Khoảng cách giữa các mục

                                    }} >
                                        <View style={{
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: item.id === selectBackgroundColorsItem ? "#699DC8" : "#DEDEE5"
                                            , width: 36,
                                            height: 36, borderRadius: 50,
                                        }}>
                                            <Text style={{ fontWeight: "600", fontSize: 14, lineHeight: 22, color: item.id === selectBackgroundColorsItem ? "white" : "black" }}>{item.text}</Text>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>

            </View>
        </View >
    )
}

export default ExamEntranceScreen
