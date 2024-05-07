// OnBoardingScreen.js

import React, { useState, useRef } from 'react';
import { View, Button, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import Onboarding1 from '../../screens/boardings/Onboarding1';
import Onboarding2 from '../../screens/boardings/Onboarding2';
import Onboarding3 from '../../screens/boardings/Onboarding3';

import {
    btn_next_onboarding,
    btn_onboarding_1,
    btn_onboarding_2,
    btn_onboarding_3
} from "../../assets/images/OnBoardingScreenImage";

export default function OnBoardingScreen({ navigation }) {
    const [currentScreen, setCurrentScreen] = useState(0); // Bắt đầu từ 0 để đồng bộ với index của Swiper
    const swiperRef = useRef(null);

    const handlePress = () => {
        if (currentScreen < 2) { // Sử dụng 2 vì index của Swiper bắt đầu từ 0
            swiperRef.current.scrollBy(1);
        } else {
            navigation.navigate('LoginScreen');
        }
    };

    const handleOnClickSkip = () => {
        navigation.navigate('LoginScreen');
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar backgroundColor="white" barStyle="light-content" />

            <View style={{ alignItems: "flex-end", marginEnd: 20 }}>
                <TouchableOpacity onPress={handleOnClickSkip}>
                    <Text style={{ fontSize: 14, lineHeight: 22, fontWeight: 600 }}>Bỏ qua</Text>
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

            {/* <Image title="Tiếp theo" onPress={handlePress} /> */}

            <View style={{ alignItems: "center", marginBottom: 100 }}>
                <TouchableOpacity onPress={handlePress}>
                    <Image style={{ width: 48, height: 48 }} source={btn_next_onboarding} />
                </TouchableOpacity>
            </View>

        </View>
    );
}
