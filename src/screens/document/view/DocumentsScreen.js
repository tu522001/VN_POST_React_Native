// HomeScreen.js
import React, { useLayoutEffect } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';

export default function DocumentsScreen({ navigation }) {

    // Ẩn thanh chứa (action bar)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [navigation]);


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            {/* <StatusBar backgroundColor="#FCB71E" barStyle="light-content" /> */}

            <Text>DocumentsScreen</Text>
        </View>
    );
};


