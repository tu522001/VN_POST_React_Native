import { useEffect } from 'react';
import { BackHandler } from 'react-native';

export const HandleOnClickBack = (callback) => {

    useEffect(() => {
        const backAction = () => {
            callback();
            if (Platform.OS === 'android') {
                BackHandler.exitApp();
                return true;
            } else {
                // Trên iOS, bạn có thể thực hiện các hành động phù hợp tại đây,
                // ví dụ: đóng một modal hoặc hiển thị màn hình chính của ứng dụng.
                // Tùy thuộc vào cách bạn thiết kế ứng dụng của mình.
                // Ví dụ: NavigationService.navigate('Home');
                // hoặc navigation.goBack();
                return true;
            }
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [callback]);

}