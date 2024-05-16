import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import ChangePasswordViewModel from "../viewmodel/ChangePasswordViewModel";
import styles from '../styles/ChangePasswordStyles';
import { btn_primary } from '../../../assets/images/ChangePasswordImage';

const ChangePassword: React.FC = () => {
    const { password, handleInputChangePassword, newPassword1, handleInputChangeNewPassword1, newPassword2, handleInputChangeNewPassword2 } = ChangePasswordViewModel();

    const onClickBtnSave = () => {
        // Làm cái gì đó khi nhấn nút Save
    };

    return (
        <View style={styles.view_total}>
            <View style={styles.view_1}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Mật khẩu cũ:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChangePassword}
                            value={password}
                            placeholder=""
                            maxLength={30}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Mật khẩu mới:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChangeNewPassword1}
                            value={newPassword1}
                            placeholder=""
                            maxLength={30}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Xác nhận mật khẩu mới:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChangeNewPassword2}
                            value={newPassword2}
                            placeholder=""
                            maxLength={30}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.view_2}>
                <TouchableOpacity onPress={onClickBtnSave}>
                    <Image style={styles.btn_primary} source={btn_primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChangePassword;
