// OnBoardingScreen.tsx

import React, { useState, useRef } from 'react';
import { View, Button, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect

import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import Onboarding3 from './Onboarding3';
import styles from "../styles/OnboardingScreenStyles"
import {
    btn_next_onboarding,
    btn_onboarding_1,
    btn_onboarding_2,
    btn_onboarding_3
} from "../../../assets/images/OnBoardingScreenImage";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StackNavigationProp } from '@react-navigation/stack';

interface OnBoardingScreenProps {
    navigation: StackNavigationProp<any>;
}

const OnBoardingScreen: React.FC<OnBoardingScreenProps> = ({ navigation }) => {
    const [currentScreen, setCurrentScreen] = useState(0); // Bắt đầu từ 0 để đồng bộ với index của Swiper
    const swiperRef = useRef<Swiper>(null);

    console.log(" LOG : value 0")
    useFocusEffect(
        React.useCallback(() => {
            const checkOnboardingStatus = async () => {
                const value = await AsyncStorage.getItem('onboardingComplete');
                if (value !== null) {
                    navigation.navigate('LoginScreen');
                }
            };

            checkOnboardingStatus();
        }, [])
    );


    const handlePress = async () => {
        if (swiperRef.current && currentScreen < 2) {
            swiperRef.current.scrollBy(1);
        } else {
            try {
                await AsyncStorage.setItem('onboardingComplete', 'true');
                navigation.navigate('LoginScreen');
            } catch (error) {
                console.error('Error saving data: ', error);
            }
        }
    };

    const handleOnClickSkip = async () => {
        try {
            await AsyncStorage.setItem('onboardingComplete', 'true');
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.error('Error saving data: ', error);
        }
    }

    return (
        <View style={styles.view_total}>
            <StatusBar backgroundColor="white" barStyle="light-content" />
            <View style={styles.view_status_bar}>
                <TouchableOpacity onPress={handleOnClickSkip}>
                    <Text style={styles.text}>Bỏ qua</Text>
                </TouchableOpacity>
            </View>

            <Swiper
                ref={swiperRef}
                index={currentScreen}
                onIndexChanged={(index) => setCurrentScreen(index)}
                showsButtons={false}
                activeDotColor="#699DC8" // khi được chọn
                dotColor='#E5E5E5' // khi chưa được chọn
                loop={false}>
                <Onboarding1 />
                <Onboarding2 />
                <Onboarding3 />
            </Swiper>

            <View style={styles.view_btn_next}>
                <TouchableOpacity onPress={handlePress}>
                    <Image style={styles.btn_next} source={btn_next_onboarding} />
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default OnBoardingScreen