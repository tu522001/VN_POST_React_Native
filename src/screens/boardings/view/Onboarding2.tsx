import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import React from "react";
import {
  btn_next_onboarding,
  btn_onboarding_1,
  btn_onboarding_2,
  btn_onboarding_3
} from "../../../assets/images/OnBoardingScreenImage"
import styles from "../styles/OnboardingScreenStyles"

const Onboarding2: React.FC = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={btn_onboarding_2} />
      <Text style={styles.text_1} >Tìm kiếm bài học, bài thi dễ dàng</Text>
      <Text style={styles.text_2}> Dễ dàng tìm kiếm bài học, bài thi theo tên</Text>
    </View>
  )
}

export default Onboarding2
