import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import React from "react";
import {
    btn_next_onboarding,
    btn_onboarding_1,
    btn_onboarding_2,
    btn_onboarding_3
} from "../../../assets/images/OnBoardingScreenImage"
import styles from "../styles/OnboardingScreenStyles"

const Onboarding3: React.FC = () => {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={btn_onboarding_3} />
            <Text style={styles.text_1} >Thư viện tài liệu đa dạng</Text>
            <Text style={styles.text_2}>Thư viện bài giảng, tài liệu đồ sộ với {"\n\t\t\t\t\t\t\t"}hơn 50.000 học liệu</Text>
        </View>
    )
}

export default Onboarding3

