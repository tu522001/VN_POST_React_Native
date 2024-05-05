// EditAccountInformationScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { btn_primary, btn_calendar, line } from '../../../assets/images/EditAccountScreenImage'
import styles from '../styles/EditAccountScreenStyles'
import EditAccountScreenViewModel from '../viewmodel/EditAccountScreenViewModel';
import DatePicker from 'react-native-date-picker'



export default function EditAccountScreen() {

    const { username, address, phone, email, date, open, dateString, maxDate, minDate, setOpen, handleConfirm, handleInputChangeUsername, handleInputChangeAdress, handleInputChangePhone, handleInputChangeEmail } = EditAccountScreenViewModel()
    const [selectedGender, setSelectedGender] = useState('nam');

    // thông tin user
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

    // chỉnh sửa thông tin user
    const EditInforUses = ({ value, onChangeText, maxLength, title_1, title_2 }) => (
        <View style={styles.container} >
            <View style={styles.inputContainer}>
                <Text style={styles.text}>{title_1}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={title_2} // text
                    maxLength={maxLength} // Giới hạn tối đa 11 ký tự
                />
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.supper_view} >
            <View style={styles.total_view1}>
                <InfoRow title1="Tên đăng nhập" title2="Admin" />
                <InfoRow title1="Chức danh" title2="Nhân viên" />
                <InfoRow title1="Đơn vị" title2="TCT Bưu điện Việt Nam" />
            </View>


            <View style={{ marginTop: 20, marginTop: 10, height: "100%", backgroundColor: "white" }}>

                <Text style={{ marginStart: 20, marginTop: 20, fontWeight: 600, fontSize: 12, lineHeight: 18, color: "#000000" }}>CHỈNH SỬA THÔNG TIN</Text>

                <EditInforUses
                    value={username}
                    onChangeText={handleInputChangeUsername}
                    maxLength={40}
                    title_1="Họ và tên:"
                    title_2="Nguyễn Trường"
                />

                <EditInforUses
                    value={address}
                    onChangeText={handleInputChangeAdress}
                    maxLength={40}
                    title_1="Địa chỉ:"
                    title_2="Hà Nội"
                />

                <EditInforUses
                    value={phone}
                    onChangeText={handleInputChangePhone}
                    maxLength={10}
                    title_1="Số điện thoại:"
                    title_2="0989936077"
                />

                <EditInforUses
                    value={email}
                    onChangeText={handleInputChangeEmail}
                    maxLength={40}
                    title_1="Email:"
                    title_2="NguyenTruong123@gmail.com"
                />



                <TouchableOpacity onPress={() => {
                    console.log("Hello")
                    setOpen(true)
                }}>
                    <View style={styles.container} >
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Ngày sinh:</Text>
                            <Text style={{ position: "absolute", left: 16, marginStart: 5, top: 20, fontSize: 14, color: dateString ? "#44444F" : "#B5B5BE" }}>
                                {dateString || "05/02/2003"} {/* Hiển thị ngày mặc định nếu dateString rỗng */}
                            </Text>
                            <View style={{ position: "absolute", right: 10, top: 16 }}>
                                <Image style={{ width: 20, height: 20 }} source={btn_calendar} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View>


                </View>


                <Image source={btn_primary} style={{ width: "90%", height: 40, marginStart: 20, marginEnd: 20, marginTop: 20 }} />
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


