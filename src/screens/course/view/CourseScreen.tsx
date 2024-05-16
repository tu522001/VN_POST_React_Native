// CourseScreen.tsx
// Khoá học
import React, { useLayoutEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { HandleOnClickBackExitApp } from '../../../utils/HandleOnClickBackExitApp';
import { btn_kh_next, btn_search } from '../../../assets/images/CourseScreenImage'
import { ScrollView } from 'react-native-gesture-handler';
import CourseScreenViewModel from '../viewmodel/CourseScreenViewModel';
import { data1, data2 } from "../../../data/models/CourseScreenModel"
import styles from "../styles/CourseScreenStyles"
import { ItemData, ItemData2 } from "../../../domain/models/InterfaceItemData";

export default function CourseScreen({ navigation }: { navigation: any }) {
    const { colorButton } = CourseScreenViewModel();

    // Function to handle back button click
    const handleBack = () => {
        console.log("Người dùng bấm back");
    };

    // Function to handle click event
    const handleClick = () => {
        console.log("Người dùng bấm ");
        // navigation.navigate('ForgotPasswordScreen'); // Chuyển hướng sang màn hình 'Home'
    }

    // Handle layout effect
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // Ẩn thanh chứa (action bar)
        });
    }, [navigation]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <View style={styles.view_1}>
                <View style={styles.view_1_1}>
                    <Text style={styles.text_course}>Khoá học</Text>
                </View>
                <View style={styles.view_1_2}>
                    <Image source={btn_search} style={styles.image_search_for_courses} />
                    <Text style={styles.text_search_for_courses}>Tìm kiếm khoá học</Text>
                </View>
            </View>

            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} // ẩn vector scroll  theo chiều ngang
                    data={data1}
                    renderItem={({ item }: { item: ItemData }) => {
                        return (
                            <View style={{ height: 141, width: 343, borderRadius: 20, backgroundColor: item.backgroundColor, marginTop: 30, marginStart: 20, marginEnd: 25 }}>
                                <Text style={styles.text_1_item_flastList} >Nghiệp vụ nhân viên bưu tá Bưu điện VN</Text>
                                <Text style={styles.text_2_item_flastList}>Hết hạn: 02/09/2022</Text>
                                <TouchableOpacity onPress={handleClick} style={styles.style_touchable_opacity}>
                                    <View style={{ width: 90, height: 36, borderRadius: 30, backgroundColor: colorButton ? 'red' : '#FCB71E' }}>
                                        <Text style={styles.text_event}>Sự kiện</Text>
                                    </View>
                                </TouchableOpacity>
                                <Image style={styles.styles_image} source={item.image} />
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>

            <View style={styles.view_total_2}>
                <FlatList
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    data={data2}
                    renderItem={({ item }: { item: ItemData2 }) => {
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
                                <Image source={item.image} style={styles.styles_image_1} />
                                <Text style={styles.text_item_flatList_2}>{item.text}</Text>
                                <Image source={btn_kh_next} style={styles.styles_image_2} />
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </ScrollView>
    );
};
