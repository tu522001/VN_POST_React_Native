import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, PermissionsAndroid } from 'react-native';
import { document_1, document_2, document_download, document_filter, btn_search } from '../../../assets/images/DocumentsScreenImage';
import { truncateText } from "../../../utils/TruncateText";
import DocumentsScreenViewModel from '../viewmodel/DocumentsScreenViewModel';
import DownloadViewModel from '../viewmodel/DownloadViewModel';

export default function DocumentsScreen({ navigation }) {

    const maxCharacters = 30; // Số ký tự tối đa cho phép

    // gọi đến ViewModel 
    const { documents } = DocumentsScreenViewModel()
    const { permissionsGranted, downloadFile } = DownloadViewModel(); // Dùng DownloadViewModel

    // ẩn ActionBar
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, [navigation]);


    const onClickDownload = async (fileUrl) => {
        console.log('Clicked item', fileUrl);

        if (permissionsGranted) {
            downloadFile(fileUrl);
            console.log('Đã Cấp Quyền Truy Cập Bộ Nhớ.');
        } else {
            console.log('Quyền Truy Cập Bộ Nhớ Bị Từ Chối');
        }
    };

    const onClickItem = (item) => {
        console.log("Clicked item index:", item);
        // Thực hiện các hành động khác dựa trên chỉ mục được nhấp
        navigation.navigate('DetailedDocuments', { item }); // Truyền dữ liệu item và index qua navigation

    };

    const renderDocumentItem = ({ item, index }) => {
        // Kiểm tra nếu item của là null thì không render mục này
        if (!item) {
            return null;
        }

        return (
            <View style={{ backgroundColor: "white", height: 100 }}>
                <TouchableOpacity onPress={() => onClickItem(item)} >
                    <View style={{ marginTop: 30 }}   >
                        <Text style={{ color: "#0A2745", fontSize: 14, lineHeight: 22, fontWeight: "500", marginStart: 20 }}> {item && item.Title}</Text>
                        <View style={{ flexDirection: "row", marginStart: 20, marginTop: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image style={{ width: 16, height: 16 }} source={document_1} />
                                <Text style={{ color: "#44444F", fontSize: 12, lineHeight: 18, fontWeight: "400", marginStart: 5, whiteSpace: 'pre-line' }}>
                                    {truncateText((item && item.Unit) || "", maxCharacters)}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 'auto', marginRight: 80, alignItems: 'center' }}>
                                <Image style={{ width: 16, height: 16 }} source={document_2} />
                                <Text style={{ color: "#44444F", fontSize: 12, lineHeight: 18, fontWeight: "400", marginStart: 5 }}>.{item && item.Style}</Text>
                            </View>
                            <TouchableOpacity onPress={() => onClickDownload(item.TypeOfDocument)}>
                                <Image style={{ width: 24, height: 24, marginEnd: 20 }} source={document_download} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        );
    };

    return (
        <View style={{ flex: 1, }}>


            <View style={{ width: "100%", height: 100, backgroundColor: "#FFFFFF", flexDirection: "row", alignItems: 'center' }}>

                <View style={{ backgroundColor: "#F1F1F5", marginTop: 48, width: 200, height: 36, borderRadius: 8, marginStart: 20, justifyContent: "center", flexDirection: "row", alignItems: 'center' }}>
                    <Image source={btn_search} style={{ width: 20, height: 20, marginEnd: 10 }} />
                    <Text style={{ fontSize: 12, lineHeight: 18, color: "#92929D", fontWeight: 400, marginEnd: 40 }}>Tìm kiếm tài liệu</Text>
                </View>

                <View style={{ flex: 1, alignItems: "flex-end", marginTop: 48, marginEnd: 20 }}>
                    <Image source={document_filter} style={{ width: 20, height: 20 }} />
                </View>

            </View>


            <View style={{ marginTop: 10 }}>
                <FlatList
                    data={documents}
                    renderItem={renderDocumentItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        </View >
    );
}
