// LoginScreen.js

import React, { useState } from "react";
import { View, StatusBar, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/LoginScreenStyles'
import {
    logoImage,
    dangerImage,
    visibilityImage,
    uncheckImage,
    loginImage,
    backgroundImage,
} from '../../../assets/images/LoginScreenImage'
import { Button } from "react-native-paper";


export default function LoginScreen() {

    const [username, setUsername] = useState('');

    const handleInputChangeUsername = (text) => {
        setUsername(text);
    };

    const [password, setPassword] = useState('');

    const handleInputChangePassword = (text) => {
        setPassword(text);
    };

    const navigation = useNavigation();

    const handleOnClickForgotPassword = () => {
        // Xử lý khi click vào đổi mật khẩu
        console.log("click vào đổi mật khẩu");
        navigation.navigate('ForgotPasswordScreen'); // Chuyển hướng sang màn hình 'Home'
    };

    const handleOclickLogin = () => {
        // Xử lý khi click vào đăng nhập
        console.log("click vào đăng nhập");
        navigation.navigate('HomeScreen'); // Chuyển hướng sang màn hình 'Home'
    }
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="white" />
            <View>
                <Image style={styles.image} source={logoImage} />
            </View>

            <View style={styles.views} >
                <View style={styles.card}>
                    <Text style={styles.text_login}>Tên đăng nhập</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChangeUsername}
                        value={username}
                        placeholder="" // text
                        maxLength={11} // Giới hạn tối đa 11 ký tự
                        keyboardType="numeric" // Bàn phím chỉ hiển thị các số
                    />
                </View>
                {/* <View style={styles.row}>
                    <Image style={styles.image_danger} source={require("../../device/image_local/danger.png")} />
                    <Text style={styles.text_check_use_name}>Tên đăng nhập không đúng, bạn vui lòng kiếm tra lại</Text>
                </View> */}
            </View>

            <View style={styles.view_password} >
                <View style={styles.card}>
                    <Text style={styles.text_login}>Mật khẩu</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChangePassword}
                        value={password}
                        placeholder="" // text
                        maxLength={22} // Giới hạn tối đa 22 ký tự
                    />
                    <Image style={styles.image_hide_and_show_password} source={visibilityImage} />



                </View>
            </View>

            <View style={styles.view_3}>
                <Image style={styles.img_checkbox} source={uncheckImage} />
                <Text style={styles.text_memorize}>Ghi nhớ tài khoản</Text>

                {/* click vào Quên mật khẩu */}
                <TouchableOpacity onPress={handleOnClickForgotPassword}>
                    <Text style={styles.text_forgot_password}>Quên mật khẩu</Text>
                </TouchableOpacity>

            </View>

            {/* Click vào nút đăng nhập */}
            <TouchableOpacity onPress={handleOclickLogin}>
                <Image style={styles.img_login} source={loginImage} />
            </TouchableOpacity>

            <Image style={styles.img_background} source={backgroundImage} />

        </View>

    );
}

