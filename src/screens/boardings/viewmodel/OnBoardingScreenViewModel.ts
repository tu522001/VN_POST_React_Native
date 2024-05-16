import { useState, useRef } from "react";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

interface OnBoardingScreenViewModelProps {
    navigation: NavigationProp<ParamListBase>;
}

const OnBoardingScreenViewModel = ({ navigation }: OnBoardingScreenViewModelProps) => {
    const [currentScreen, setCurrentScreen] = useState<number>(0); // Bắt đầu từ 0 để đồng bộ với index của Swiper
    const swiperRef = useRef<Swiper | null>(null);

    function handlePress() {
        if (swiperRef.current && currentScreen < 2) { // Sử dụng 2 vì index của Swiper bắt đầu từ 0
            swiperRef.current.scrollBy(1);
        } else {
            navigation.navigate('LoginScreen');
        }
    };

    return { currentScreen, setCurrentScreen, handlePress, swiperRef };
}

export default OnBoardingScreenViewModel;
