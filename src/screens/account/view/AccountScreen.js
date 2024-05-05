// HomeScreen.js
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    ac_1,
    ac_2,
    ac_3,
    ac_4,
    ac_photo,
    ac_edit,
    avatar, btn_kh_next
} from '../../../assets/images/AccountScreenImage';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function AccountScreen({ navigation }) {

    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadData();
        });
        return unsubscribe;
    }, [navigation]);

    const loadData = async () => {
        try {
            const storedUsername = await AsyncStorage.getItem('username');
            const storedPhone = await AsyncStorage.getItem('phone');
            if (storedUsername !== null) setUsername(storedUsername);
            if (storedPhone !== null) setPhone(storedPhone);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // Ẩn thanh chứa (action bar)
        });
    }, [navigation]);


    const OnClickItem = () => {
        console.log("Voa2")
        navigation.navigate('EditAccountScreen');
    }

    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 350 }}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', }}>
                    <View style={{ flex: 2, alignItems: 'center', marginTop: 80 }}>
                        <Image style={{ width: 88, height: 88, borderRadius: 60, marginStart: 50 }} source={avatar} />
                        <Image style={{ width: 36, height: 36, position: 'absolute', marginTop: 50, right: 100 }} source={ac_photo} />
                    </View>
                    <View style={{ marginEnd: 20 }}>
                        <TouchableOpacity onPress={OnClickItem}>
                            <Image style={{ width: 24, height: 24 }} source={ac_edit} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    <Text style={{ fontWeight: 500, fontSize: 20, lineHeight: 30, color: "#0A2745" }}>{username}</Text>
                    <Text style={{ color: "#92929D", fontSize: 14, fontWeight: 400, lineHeight: 22 }}>{phone}</Text>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30 }}>
                    <TouchableOpacity  >
                        <View style={{ width: 160, height: 82, backgroundColor: '#FFE8D180', borderRadius: 8, marginStart: 20 }}>
                            <Text style={{ textAlign: 'center', lineHeight: 36, fontSize: 24, color: "#B27A03", fontWeight: 600, marginTop: 10 }}>25</Text>
                            <Text style={{ textAlign: 'center', lineHeight: 22, fontSize: 14, color: "#44444F", fontWeight: 400, }}>Khoá đã học</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginEnd: 10 }} >
                        <View style={{ width: 160, height: 82, backgroundColor: '#E9F2FC80', borderRadius: 8, marginEnd: 10 }}>
                            <Text style={{ textAlign: 'center', lineHeight: 36, fontSize: 24, color: "#114277", fontWeight: 600, marginTop: 10 }}>7.75</Text>
                            <Text style={{ textAlign: 'center', lineHeight: 22, fontSize: 14, color: "#44444F", fontWeight: 400, }}>Điểm trung bình</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                marginTop: 10, backgroundColor: "white", height: 500
            }}>
                < FlatList
                    nestedScrollEnabled={true}
                    scrollEnabled={false}
                    data={
                        [
                            { id: 1, image: ac_1, text: "Phản hồi" },
                            { id: 2, image: ac_2, text: "Đổi mật khẩu" },
                            { id: 3, image: ac_3, text: "Tiến trình học cá nhân" },
                            { id: 4, image: ac_4, text: "Đăng xuất" },
                        ]}

                    //  renderItem : là một hàm được gọi kiểm tra id của mỗi mục
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", height: 60, width: "100%", marginTop: 1, marginStart: 15 }}>
                                <Image source={item.image} style={{ width: 24, height: 24, marginStart: 24 }} />
                                <Text style={{ marginStart: 24, color: "#0A2745", fontSize: 16, fontWeight: 500, lineHeight: 24 }}>{item.text}</Text>
                                <Image source={btn_kh_next} style={{ width: 24, height: 24, marginLeft: 'auto', marginEnd: 50 }} />
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>


        </ScrollView >
    );
};


