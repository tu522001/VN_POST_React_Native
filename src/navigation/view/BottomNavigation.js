// BottomNavigation.js
import React from 'react';
import { View, Text, Image, StatusBar, BackHandler, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from '../../screens/homes/view/HomePageScreen';
import DocumentsScreen from '../../screens/document/view/DocumentsScreen';
import CourseScreen from '../../screens/course/view/CourseScreen';
import ContestScreen from '../../screens/contest/view/ContestScreen';
import AccountScreen from '../../screens/account/view/AccountScreen';
import { useFocusEffect } from '@react-navigation/native';
// import style
import styles from '../../navigation/styles/BottomNavigationStyle'
// import hình ảnh từ file BottomNavigationIconImage.ts
import {
    homePageImage,
    contestImage,
    courseImage,
    documentsImage,
    accountImage
} from '../../assets/images/BottomNavigationIconImage'

export default function BottomNavigation() {
    const Tab = createBottomTabNavigator();

    // Xử lý sự kiện nhấn nút back
    const backAction = () => {

        // Alert.alert('Thoát!', 'Bạn có chắc chắn muốn thoát ứng dụng?', [
        //     {
        //         text: 'Hủy',
        //         onPress: () => null,
        //         style: 'cancel',
        //     },
        //     { text: 'Thoát', onPress: () => BackHandler.exitApp() },
        // ]);

        BackHandler.exitApp()
        return true;
    };

    // Sử dụng useFocusEffect để thiết lập và dọn dẹp sự kiện
    useFocusEffect(
        React.useCallback(() => {
            BackHandler.addEventListener('hardwareBackPress', backAction);
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', backAction);
        }, [])
    );

    const renderTabItem = (name, component, image, text, statusBarColor) => {
        return (
            <Tab.Screen
                name={name}
                component={component}
                options={{
                    headerStyle: {
                        backgroundColor: "green"
                    },
                    // title: "", // ẩn title thanh ActionBar,

                    tabBarIcon: ({ focused }) => (
                        <View style={styles.view}>
                            <Image
                                source={image}
                                resizeMode='contain'
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: focused ? "#D99503" : "#B5B5BE",
                                }}
                            />
                            <Text style={{ color: focused ? "#D99503" : "#B5B5BE", fontSize: 11 }}>{text}</Text>
                        </View>
                    ),

                }}
                listeners={({ navigation, route }) => ({
                    tabPress: () => {
                        StatusBar.setBackgroundColor(statusBarColor);
                    },
                })}
            />

        );
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
            }}>

            {renderTabItem("HomePage", HomePageScreen, homePageImage, "Trang Chủ", "#FCB71E")}
            {renderTabItem("Documents", DocumentsScreen, documentsImage, "Cuộc thị", "#FFFFFF")}
            {renderTabItem("Course", CourseScreen, courseImage, "Khoá học", "#FFFFFF")}
            {renderTabItem("Contest", ContestScreen, contestImage, "Tài liệu", "#FFFFFF")}
            {renderTabItem("Account", AccountScreen, accountImage, "Tài khoản", "#FFFFFF")}

        </Tab.Navigator>
    );
}
