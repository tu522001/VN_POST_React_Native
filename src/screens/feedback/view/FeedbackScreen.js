
import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import React from "react";

export default function FeedbackScreen({ navigation }) {

    return (
        <View style={{ flex: 1, marginTop: 100, alignItems: "center" }}>
            <Text style={{ color: "#0A2745", fontSize: 18, fontWeight: "500", lineHeight: 28, marginTop: 40 }} >Thư viện tài liệu đa dạng</Text>
            <Text style={{ fontSize: 14, lineHeight: 22, fontWeight: "400", marginTop: 10 }}>Thư viện bài giảng, tài liệu đồ sộ với {"\n\t\t\t\t\t\t\t"}hơn 50.000 học liệu</Text>
        </View>
    )
}

