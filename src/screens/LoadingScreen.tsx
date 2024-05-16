import { View, StyleSheet, useWindowDimensions, Image, Text } from "react-native";
import React from "react";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";


const LoadingScreen: React.FC = () => {


    return (
        <View style={{ flex: 1, top: 60 }}>
            <Text style={{ color: "black", fontSize: 30 }}> Bạn có thể học mọi lúc mọi nơi dễ dàng chỉ với {"\n"} {"\t\t\t\t\t\t\t\t\t\t"}thiết bị có kết nối internet</Text>
        </View>
    )

}

export default LoadingScreen

