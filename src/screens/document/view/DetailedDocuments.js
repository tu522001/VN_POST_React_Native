import { View, StatusBar, useWindowDimensions, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { detailed_document_downloading } from "../../../assets/images/DetailedDocuments"
import styles from "../styles/DetailedDocumentsStyle";
import DownloadViewModel from "../viewmodel/DownloadViewModel";

export default function DetailedDocuments({ route }) {

    const { permissionsGranted, downloadFile } = DownloadViewModel(); // Dùng DownloadViewModel

    const { item } = route.params; // Nhận dữ liệu từ navigation

    const onClickDownload = async (fileUrl) => {
        console.log('Clicked item', fileUrl);

        if (permissionsGranted) {
            downloadFile(fileUrl);
            console.log('Đã Cấp Quyền Truy Cập Bộ Nhớ.');
        } else {
            console.log('Quyền Truy Cập Bộ Nhớ Bị Từ Chối');
        }
    };

    return (
        <View style={styles.view_total}>
            <StatusBar backgroundColor="white" barStyle="light-content" />
            <View style={styles.view_1}>
                <View style={styles.view_1_1}>
                    <Text style={styles.text_title}>
                        {item.Title}
                    </Text>
                </View>

                <View style={styles.view_1_2}>
                    <View style={styles.view1}>
                        <Text style={styles.text_view}>Đơn vị:</Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.text_view}> {item.Unit}</Text>
                    </View>
                </View>

                <View style={styles.view3}>
                    <View style={styles.view1}>
                        <Text style={styles.text_view}>Ngày phát hành: </Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.text_view}> {item.ReleaseDate}</Text>
                    </View>
                </View>

                <View style={styles.view3}>
                    <View style={styles.view1}>
                        <Text style={styles.text_view}>Kích thước file: </Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.text_view}> {item.FileSize}</Text>
                    </View>
                </View>

                <View style={styles.view3}>
                    <View style={styles.view1}>
                        <Text style={styles.text_view}>Loại tài liệu: </Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={styles.text_view}> {item.Style}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => onClickDownload(item.TypeOfDocument)}>
                    <View style={styles.view_touchable_opacity}>
                        <View style={styles.view_1_touchable_opacity}>
                            <Image style={styles.image_touchable_opacity} source={detailed_document_downloading} />
                            <Text style={styles.text_touchable_opacity}>Tải về</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>


    )
}


