import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default AccountScreenViewModel = () => {


    const [avatarUri, setAvatarUri] = useState(null);

    const pickImage = async () => { // Khai báo hàm pickImage là một hàm async
        const options = { // Tạo một đối tượng options chứa các tùy chọn cho việc chọn ảnh từ thư viện
            mediaType: 'photo', // Chỉ định rằng chỉ có thể chọn ảnh, không phải video
        };

        ImagePicker.launchImageLibrary(options, (response) => { // Gọi hàm launchImageLibrary của ImagePicker để mở thư viện ảnh và chọn ảnh
            if (!response.didCancel && !response.errorCode) { // Kiểm tra nếu người dùng không hủy và không có lỗi xảy ra khi chọn ảnh
                setAvatarUri(response.uri); // Thiết lập state avatarUri với đường dẫn đến ảnh đã chọn
            }
        });
    };

    const takePhoto = async () => { // Khai báo hàm takePhoto là một hàm async
        const options = { // Tạo một đối tượng options chứa các tùy chọn cho việc chụp ảnh từ camera
            mediaType: 'photo', // Chỉ định rằng chỉ có thể chụp ảnh, không phải video
        };

        ImagePicker.launchCamera(options, (response) => { // Gọi hàm launchCamera của ImagePicker để mở camera và chụp ảnh
            if (!response.didCancel && !response.errorCode) { // Kiểm tra nếu người dùng không hủy và không có lỗi xảy ra khi chụp ảnh
                setAvatarUri(response.uri); // Thiết lập state avatarUri với đường dẫn đến ảnh đã chụp
            }
        });
    };

    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    const loadData = async () => {
        try {
            const storedUsername = await AsyncStorage.getItem('username');
            const storedPhone = await AsyncStorage.getItem('phone');
            if (storedUsername !== null) setUsername(storedUsername);
            if (storedPhone !== null) setPhone(storedPhone);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
        }
    };

    return { avatarUri, takePhoto, pickImage, username, phone, loadData }
}