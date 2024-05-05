// ForgotPasswordScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles/ForgotPasswordScreenStyles'

import {
    logoImage,
    sendImage,
    backgroundImage,
} from '../../../assets/images/PasswordChangeScreenImage'

export default function ForgotPasswordScreen() {

    const [username, setUsername] = useState('');

    const handleInputChangeUsername = (text) => {
        setUsername(text);
    };

    const [password, setPassword] = useState('');

    const handleInputChangePassword = (text) => {
        setPassword(text);
    };

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={logoImage} />
            </View>

            <View>
                <Text style={styles.text}> Mật khẩu mới sẽ được gửi vào email của bạn </Text>
            </View>

            <View style={styles.views} >
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChangeUsername}
                        value={username}
                        placeholder="Tên tài khoản" // text
                        maxLength={11} // Giới hạn tối đa 11 ký tự
                        keyboardType="numeric" // Bàn phím chỉ hiển thị các số
                    />
                </View>

            </View>

            <View style={styles.view_password} >
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChangePassword}
                        value={password}
                        placeholder="Email" // text
                        maxLength={22} // Giới hạn tối đa 22 ký tự
                    />
                </View>
            </View>

            <Image style={styles.img_login} source={sendImage} />
            <Image style={styles.img_background} source={backgroundImage} />

        </View>
    );
};

