import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import React from "react";
import {
    btn_next_onboarding,
    btn_onboarding_1,
    btn_onboarding_2,
    btn_onboarding_3
} from "../../assets/images/OnBoardingScreenImage"
export default function Onboarding3({ navigation }) {

    return (
        <View style={{ flex: 1, marginTop: 100, alignItems: "center" }}>
            <Image style={{ width: 235, height: 150 }} source={btn_onboarding_3} />
            <Text style={{ color: "#0A2745", fontSize: 18, fontWeight: "500", lineHeight: 28, marginTop: 40 }} >Thư viện tài liệu đa dạng</Text>
            <Text style={{ fontSize: 14, lineHeight: 22, fontWeight: "400", marginTop: 10 }}>Thư viện bài giảng, tài liệu đồ sộ với {"\n\t\t\t\t\t\t\t"}hơn 50.000 học liệu</Text>
        </View>
    )
}

