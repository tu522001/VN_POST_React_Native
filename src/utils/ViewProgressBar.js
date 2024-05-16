import React from 'react';
import { View, Text } from 'react-native';

const ViewProgressBar = ({ progress }) => {
    const containerStyles = {
        height: 6,
        width: 40,
        backgroundColor: '#DEDEE5', // màu chưa chạy được
        borderRadius: 2, // Điều chỉnh giá trị này để thay đổi độ cong của góc
        overflow: 'hidden', // Đảm bảo các góc bo tròn không bị cắt
    };

    const fillerStyles = {
        height: 6,
        width: `${progress}%`,
        backgroundColor: '#9DC2E0', // màu chạy được
        borderRadius: 2, // Điều chỉnh giá trị này để thay đổi độ cong của góc
        justifyContent: 'center',
        alignItems: 'flex-end',
    };

    return (
        <View style={containerStyles}>
            <View style={fillerStyles}>
            </View>
        </View>
    );
};

export default ViewProgressBar;
