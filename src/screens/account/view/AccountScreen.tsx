// AccountScreen.tsx
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ac_photo, ac_edit, avatar, btn_kh_next } from '../../../assets/images/AccountScreenImage';
import AccountScreenViewModel from '../viewmodel/AccountScreenViewModel';
import { data } from "../../../data/models/AccountScreenModel"
import { Item } from "../../../domain/models/InterdaceItem";
import styles from "../styles/AccountScreenStyles"
const AccountScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    const { username, phone, loadData } = AccountScreenViewModel();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadData();
        });
        return unsubscribe;
    }, [navigation]);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // Ẩn thanh chứa (action bar)
        });
    }, [navigation]);

    const OnClickIconEditAccount = () => {
        navigation.navigate('EditAccountScreen');
    };

    const onClickItem = (id: number) => {
        switch (id) {
            case 1:
                return navigation.navigate('FeedbackScreen');
            case 2:
                return navigation.navigate('ChangePassword');
            case 3:
                return console.log("Tiến trình học cá nhân");
            case 4:
                return console.log("Đăng xuất");
            default:
                Alert.alert('NUMBER NOT FOUND');
        }
    };

    return (
        <ScrollView>
            <View style={styles.view_sroll}>
                <View style={styles.view_1}>
                    <View style={styles.view_1_1}>
                        <Image style={styles.image_1_1} source={avatar} />
                        <Image style={styles.image_1_2} source={ac_photo} />
                    </View>
                    <View style={styles.view_2}>
                        <TouchableOpacity onPress={OnClickIconEditAccount}>
                            <Image style={styles.image_2_1} source={ac_edit} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.view_3}>
                    <Text style={styles.text_username}>{username}</Text>
                    <Text style={styles.text_phone}>{phone}</Text>
                </View>

                <View style={styles.view_4}>
                    <TouchableOpacity  >
                        <View style={styles.view_4_1}>
                            <Text style={styles.text_course_number}>25</Text>
                            <Text style={styles.text_course}>Khoá đã học</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity  >
                        <View style={styles.view_4_2}>
                            <Text style={styles.text_average_score}>7.75</Text>
                            <Text style={styles.text_medium_score}>Điểm trung bình</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.view_total_2}>
                <FlatList
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    data={data}
                    renderItem={({ item }: { item: Item }) => {
                        return (
                            <TouchableOpacity onPress={() => onClickItem(item.id)}>
                                <View style={styles.view_item_flatlist}>
                                    <Image source={item.image} style={styles.image1_item_flatlist} />
                                    <Text style={styles.text_item_flatlist}>{item.text}</Text>
                                    <Image source={btn_kh_next} style={styles.image2_item_flatlist} />
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </ScrollView>
    );
};

export default AccountScreen;
