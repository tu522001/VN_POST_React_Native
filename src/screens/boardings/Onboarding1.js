import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import React from "react";
import {
    btn_next_onboarding,
    btn_onboarding_1,
    btn_onboarding_2,
    btn_onboarding_3
} from "../../assets/images/OnBoardingScreenImage"

export default function Onboarding1({ navigation }) {


    return (
        <View style={{ flex: 1, marginTop: 100, alignItems: "center" }}>
            <Image style={{ width: 235, height: 150 }} source={btn_onboarding_1} />
            <Text style={{ color: "#0A2745", fontSize: 18, fontWeight: "500", lineHeight: 28, marginTop: 40 }} >Học tập mọi lúc, mọi nơi</Text>
            <Text style={{ fontSize: 14, lineHeight: 22, fontWeight: "400", marginTop: 10 }}> Bạn có thể học mọi lúc mọi nơi dễ dàng chỉ với {"\n"} {"\t\t\t\t\t\t\t\t\t\t"}thiết bị có kết nối internet</Text>
        </View>
    )
}

