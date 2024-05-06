// EditAccountInformationScreen.js
import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import { btn_primary, btn_calendar, line, radio_buttom_choose, radio_buttom_unchoose } from '../../../assets/images/EditAccountScreenImage'
import styles from '../styles/EditAccountScreenStyles'
import EditAccountScreenViewModel from '../viewmodel/EditAccountScreenViewModel';
import DatePicker from 'react-native-date-picker'
import { useFocusEffect } from '@react-navigation/native';

export default function EditAccountScreen({ navigation }) {

    const { username, address, phone, email, date, open, dateString, maxDate, minDate, isSelected, handleObserverColorUi, saveCredentials, setOpen, handleConfirm, handleInputChangeUsername, handleInputChangeAdress, handleInputChangePhone, handleInputChangeEmail } = EditAccountScreenViewModel()

    // hàm thông tin user
    const InfoRow = ({ title1, title2 }) => (
        <View style={styles.view_child_1}>
            <View style={styles.view_row_1}>
                <Text style={styles.text_login}>
                    {title1}
                </Text>
                <View style={styles.view_text_admin}>
                    <Text style={styles.text_admin}>
                        {title2}
                    </Text>
                </View>
            </View>
            <Image source={line} style={styles.image_1} />
        </View>
    );

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.navigate('Account');
                return true;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [navigation])
    );


    const onClickNavigation = () => {
        console.log("Vao3")
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.supper_view}>
            <View style={styles.total_view1}>
                <InfoRow title1="Tên đăng nhập" title2="Admin" />
                <InfoRow title1="Chức danh" title2="Nhân viên" />
                <InfoRow title1="Đơn vị" title2="TCT Bưu điện Việt Nam" />
            </View>

            <View style={styles.total_view2}>
                <Text style={styles.text_view_total2}>CHỈNH SỬA THÔNG TIN</Text>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Họ và tên:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChangeUsername}
                            value={username}
                            placeholder=""
                            maxLength={30}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Địa chỉ : </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChangeAdress}
                            value={address}
                            placeholder=""
                            maxLength={30}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Số điện thoại:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChangePhone}
                            value={phone}
                            placeholder=""
                            maxLength={10}
                            keyboardType="numeric" // Cho phép chỉ nhập số
                        />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleInputChangeEmail}
                            value={email}
                            placeholder=""
                            maxLength={40}
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    console.log("Hello")
                    setOpen(true)
                }}>
                    <View style={styles.container} >
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Ngày sinh:</Text>
                            <Text style={{ position: "absolute", left: 16, marginStart: 5, top: 20, fontSize: 14, color: dateString ? "#44444F" : "#B5B5BE" }}>
                                {dateString || ""}
                            </Text>
                            <View style={styles.view_btn_calendar}>
                                <Image style={styles.btn_calendar} source={btn_calendar} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={styles.text_sex}>Giới tính :</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginEnd: 20 }}>
                        <TouchableOpacity onPress={() => handleObserverColorUi(!isSelected)}>
                            <Image style={styles.radio_button} source={isSelected === false ? radio_buttom_unchoose : radio_buttom_choose} />
                        </TouchableOpacity>
                        <Text style={styles.text_radio_btn_sex}>Nam</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, marginEnd: 150 }}>
                        <TouchableOpacity onPress={() => handleObserverColorUi(!isSelected)}>
                            <Image style={styles.radio_button} source={isSelected === true ? radio_buttom_unchoose : radio_buttom_choose} />
                        </TouchableOpacity>
                        <Text style={styles.text_radio_btn_sex}>Nữ</Text>
                    </View>

                </View>

                <TouchableOpacity onPress={() => { saveCredentials(); onClickNavigation(); }}>
                    <Image source={btn_primary} style={styles.btn_save_changes} />
                </TouchableOpacity>

            </View>

            <DatePicker
                modal
                title={"Date of birth"}
                open={open}
                date={date}
                mode="date"
                maximumDate={maxDate}
                minimumDate={minDate}
                onConfirm={handleConfirm}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </ScrollView >
    );
};


