// CourseScreen.js 
// Khoá học
import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import { BackHandler } from 'react-native';
import { HandleOnClickBack } from '../../../utils/HandleOnClickBack';

import {
    kh_1, kh_2, kh_3, kh_4, kh_5, kh_6, kh_7, btn_kh_next, btn_search, image_course_1, image_course_2, image_course_3
} from '../../../assets/images/CourseScreenImage'
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import CourseScreenViewModel from '../viewmodel/CourseScreenViewModel';

export default function CourseScreen({ navigation }) {

    const { colorButton, handleObserverColorUi } = CourseScreenViewModel()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // Ẩn thanh chứa (action bar)
        });
    }, [navigation]);

    const handleBack = () => {
        console.log("Người dùng bấm back");
    };

    const handleClick = () => {
        console.log("Người dùng bấm ");
        // navigation.navigate('ForgotPasswordScreen'); // Chuyển hướng sang màn hình 'Home'
    }
    HandleOnClickBack(handleBack);

    return (
        <ScrollView >
            {/* <StatusBar backgroundColor="white" barStyle="light-content" /> */}


            <View style={{ width: "100%", height: 70, backgroundColor: "#FFFFFF", marginTop: 48, flexDirection: "row", alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginStart: 20, lineHeight: 24, fontWeight: '500', color: "#0A2745", fontSize: 18 }}>Khoá học</Text>
                </View>

                <View style={{ backgroundColor: "#F1F1F5", width: 200, height: 36, borderRadius: 8, marginEnd: 20, justifyContent: "center", flexDirection: "row", alignItems: 'center' }}>
                    <Image source={btn_search} style={{ width: 20, height: 20, marginEnd: 10 }} />
                    <Text style={{ fontSize: 12, lineHeight: 18, color: "#92929D", fontWeight: 400, marginEnd: 40 }}>Tìm kiếm khoá học</Text>
                </View>

            </View>



            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} // ẩn vector scroll  theo chiều ngang
                    // nestedScrollEnabled={true}
                    // scrollEnabled={false}
                    data={[
                        { id: 1, image: image_course_1, text: "Tất cả khoá học", backgroundColor: "#FFE7E7" },
                        { id: 2, image: image_course_2, text: "Khoá học Theo chức danh", backgroundColor: "#E9F2FC" },
                        { id: 3, image: image_course_3, text: "Khoá học đã hoàn thành", backgroundColor: "#FFDBBF" },
                    ]}

                    //  renderItem : là một hàm được gọi kiểm tra id của mỗi mục
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: 141, width: 343, borderRadius: 20, backgroundColor: item.backgroundColor, marginTop: 30, marginStart: 20, marginEnd: 25 }}>
                                <Text style={{ color: "#171725", fontSize: 14, lineHeight: 22, fontWeight: 600, marginTop: 10, marginStart: 20, marginTop: 15 }} >Nghiệp vụ nhân viên bưu tá Bưu điện VN</Text>
                                <Text style={{ color: "#000000", fontSize: 10, lineHeight: 15, fontWeight: 400, marginStart: 20, marginTop: 10 }}>Hết hạn: 02/09/2022</Text>
                                <TouchableOpacity onPress={handleClick} style={{ marginEnd: 90, marginStart: 20, marginTop: 10 }}>
                                    <View style={{ width: 90, height: 36, backgroundColor: '#FCB71E', borderRadius: 30, backgroundColor: colorButton === "color_buton" ? 'red' : '#FCB71E' }}>
                                        <Text style={{ width: 90, height: 36, textAlign: 'center', lineHeight: 36, fontSize: 14, color: "#0A2745", fontWeight: 600 }}>Sự kiện</Text>
                                    </View>
                                </TouchableOpacity>
                                <Image style={{ width: 140, height: 115, position: 'absolute', marginStart: 214, marginTop: 25 }} source={item.image} />
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>

            <View style={{ marginTop: 50 }}>
                <FlatList
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    data={[
                        { id: 1, image: kh_1, text: "Tất cả khoá học" },
                        { id: 2, image: kh_2, text: "Khoá học Theo chức danh" },
                        { id: 3, image: kh_3, text: "Khoá học đã hoàn thành" },
                        { id: 4, image: kh_4, text: "Khoá học chưa hoàn thành" },
                        { id: 5, image: kh_5, text: "Khoá học chờ duyệt" },
                        { id: 6, image: kh_6, text: "Đề xuất khoá học" },
                        { id: 7, image: kh_7, text: "Đăng ký khoá học" }
                    ]}

                    //  renderItem : là một hàm được gọi kiểm tra id của mỗi mục
                    renderItem={({ item }) => {
                        // tạo ra 1 biến để lưu giá trị CSS  khi renderItem chạy đến
                        let borderRadiusStyle = {};
                        if (item.id === 1) {
                            borderRadiusStyle = { borderTopLeftRadius: 8, borderTopRightRadius: 8 };
                        } else if (item.id === 7) {
                            borderRadiusStyle = { borderBottomLeftRadius: 8, borderBottomRightRadius: 8 };
                        }
                        // nếu không phải id 1, 7 thì 
                        return (
                            <View style={{ marginStart: 20, flexDirection: "row", alignItems: "center", backgroundColor: "white", height: 60, width: "90%", marginTop: 1, ...borderRadiusStyle }}>
                                <Image source={item.image} style={{ width: 24, height: 24, marginStart: 24 }} />
                                <Text style={{ marginStart: 24, color: "#0A2745", fontSize: 16, fontWeight: 500, lineHeight: 24 }}>{item.text}</Text>
                                <Image source={btn_kh_next} style={{ width: 24, height: 24, marginLeft: 'auto', marginEnd: 20 }} />
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>


        </ScrollView>
    );
};


