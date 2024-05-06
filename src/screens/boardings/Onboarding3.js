import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import React from "react";

export default function Onboarding3({ navigation }) {

    const { width } = useWindowDimensions();
    return (
        <View style={{ flex: 1, marginTop: 60 }}>
            <Text>Onboarding3</Text>
        </View>
    )
}

