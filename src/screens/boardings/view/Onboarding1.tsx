import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import React from "react";
import {
    btn_next_onboarding,
    btn_onboarding_1,
    btn_onboarding_2,
    btn_onboarding_3
} from "../../../assets/images/OnBoardingScreenImage"

import styles from "../styles/OnboardingScreenStyles"


const Onboarding1: React.FC = () => {


    return (
        <View style={styles.view}>
            <Image style={styles.image} source={btn_onboarding_1} />
            <Text style={styles.text_1} >Học tập mọi lúc, mọi nơi</Text>
            <Text style={styles.text_2}> Bạn có thể học mọi lúc mọi nơi dễ dàng chỉ với {"\n"} {"\t\t\t\t\t\t\t\t\t\t"}thiết bị có kết nối internet</Text>
        </View>
    )

}

export default Onboarding1

