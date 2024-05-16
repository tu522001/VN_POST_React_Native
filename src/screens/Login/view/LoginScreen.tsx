// LoginScreen.tsx

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
import { StackNavigationProp } from '@react-navigation/stack';
import useLoginScreenViewModel from '../viewmodel/LoginScreenViewModel'; // Import useLoginScreenViewModel

interface LoginScreenProps {
    navigation: StackNavigationProp<any>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {

    const { loginData, handleInputChangeUsername, handleInputChangePassword } = useLoginScreenViewModel(); // Use the hook

    // const navigation = useNavigation();

    const handleOnClickForgotPassword = () => {
        // Handle clicking on Forgot Password
        console.log("Clicked on Forgot Password");
        navigation.navigate('ForgotPasswordScreen'); // Navigate to 'ForgotPasswordScreen'
    };

    const handleOclickLogin = () => {
        // Handle clicking on Login
        console.log("Clicked on Login");
        navigation.navigate('HomeScreen'); // Navigate to 'HomeScreen'
        // navigation.navigate('DiaLog');
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="white" />
            <View>
                <Image style={styles.image} source={logoImage} />
            </View>

            <View style={styles.views} >
                <View style={styles.card}>
                    <Text style={styles.text_login}>Username</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChangeUsername}
                        value={loginData.username}
                        placeholder="" // text
                        maxLength={11} // Maximum 11 characters
                        keyboardType="numeric" // Numeric keyboard
                    />
                </View>
                {/* <View style={styles.row}>
                    <Image style={styles.image_danger} source={require("../../device/image_local/danger.png")} />
                    <Text style={styles.text_check_use_name}>Username is incorrect, please check again</Text>
                </View> */}
            </View>

            <View style={styles.view_password} >
                <View style={styles.card}>
                    <Text style={styles.text_login}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleInputChangePassword}
                        value={loginData.password}
                        placeholder="" // text
                        maxLength={22} // Maximum 22 characters
                    />
                    <Image style={styles.image_hide_and_show_password} source={visibilityImage} />
                </View>
            </View>

            <View style={styles.view_3}>
                <Image style={styles.img_checkbox} source={uncheckImage} />
                <Text style={styles.text_memorize}>Remember Me</Text>

                {/* Click on Forgot Password */}
                <TouchableOpacity onPress={handleOnClickForgotPassword}>
                    <Text style={styles.text_forgot_password}>Forgot Password</Text>
                </TouchableOpacity>
            </View>

            {/* Click on Login Button */}
            <TouchableOpacity onPress={handleOclickLogin}>
                <Image style={styles.img_login} source={loginImage} />
            </TouchableOpacity>

            <Image style={styles.img_background} source={backgroundImage} />
        </View>
    );
}

export default LoginScreen;
