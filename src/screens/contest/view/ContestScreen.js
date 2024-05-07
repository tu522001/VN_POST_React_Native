// HomeScreen.js
import React, { useState, useRef } from 'react';
import { View, Button } from 'react-native';
import Swiper from 'react-native-swiper';

import Onboarding1 from '../../boardings/Onboarding1';
import Onboarding2 from '../../boardings/Onboarding2';
import Onboarding3 from '../../boardings/Onboarding3';

export default function ContestScreen({ navigation }) {
    const [currentScreen, setCurrentScreen] = useState(0); // Bắt đầu từ 0 để đồng bộ với index của Swiper
    const swiperRef = useRef(null);

    const handlePress = () => {
        if (currentScreen < 2) { // Sử dụng 2 vì index của Swiper bắt đầu từ 0
            swiperRef.current.scrollBy(1);
        } else {
            return;
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {/* <Swiper
                ref={swiperRef}
                index={currentScreen}
                onIndexChanged={(index) => setCurrentScreen(index)}
                showsButtons={false}
                activeDotColor="red"
                loop={false}>
                <Onboarding1 />
                <Onboarding2 />
                <Onboarding3 />
            </Swiper> */}

            <Button title="Tiếp theo" onPress={handlePress} />
        </View>
    );
}
