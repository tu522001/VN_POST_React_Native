import React, { useSelected, useLayoutEffect, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import TrackPlayer from 'react-native-track-player';
import { document_1, document_2, document_download, document_filter, btn_search } from '../../../assets/images/DocumentsScreenImage';
import HomePageViewModel from "../../homes/viewmodel/HomePageViewModel";

// const tracks = [
//     {
//         id: 1,
//         url: require('../../../device/drawable/music_1.mp3'),
//         title: 'Blues Beat',
//     },
//     {
//         id: 2,
//         url: require('../../../device/drawable/music_2.mp3'),
//         title: 'Blues Beat',
//     },
// ];

// TrackPlayer.updateOptions({
//     stopWithApp: false,
//     capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
//     compactCapabilities: [
//         TrackPlayer.CAPABILITY_PLAY,
//         TrackPlayer.CAPABILITY_PAUSE,
//     ],
// });
export default function ContestScreen({ navigation }) {

    const { selected, handleObserverColorUi, scrollProgress, handleScroll } = HomePageViewModel(); // Sử dụng phần xử lý logic


    // ActionBar
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // Ẩn thanh chứa (action bar)
        });
    }, [navigation]);


    // const setUpTrackPlayer = async () => {
    //     try {
    //         await TrackPlayer.setupPlayer();
    //         await TrackPlayer.add(tracks);
    //         console.log('Tracks added');
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };


    // useEffect(() => {
    //     setUpTrackPlayer();

    //     return () => TrackPlayer.destroy();
    // }, []);

    function onClickTest() {
        console.log(" vAO ContestScreen")
        navigation.navigate('TestScreen');
    }

    return (
        // <View style={styles.container}>
        //     <View style={styles.row}>
        //         <TouchableOpacity
        //             style={styles.btn}
        //             onPress={() => TrackPlayer.pause()}>
        //             <Text style={styles.text}>Pause</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.play()}>
        //             <Text style={styles.text}>Play</Text>
        //         </TouchableOpacity>
        //     </View>

        //     <View style={styles.row}>
        //         <TouchableOpacity
        //             style={styles.btn}
        //             onPress={() => TrackPlayer.skipToPrevious()}>
        //             <Text style={styles.text}>Prev</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity
        //             style={styles.btn}
        //             onPress={() => TrackPlayer.skipToNext()}>
        //             <Text style={styles.text}>Next</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>

        <View >

            <View style={{ width: "100%", height: 100, backgroundColor: "#FFFFFF", flexDirection: "row", alignItems: 'center' }}>
                <View style={{ backgroundColor: "#F1F1F5", marginTop: 48, width: 200, height: 36, borderRadius: 8, marginStart: 20, justifyContent: "center", flexDirection: "row", alignItems: 'center' }}>
                    <Image source={btn_search} style={{ width: 20, height: 20, marginEnd: 10 }} />
                    <Text style={{ fontSize: 12, lineHeight: 18, color: "#92929D", fontWeight: 400, marginEnd: 40 }}>Tìm kiếm cuộc thi</Text>
                </View>

                <View style={{ flex: 1, alignItems: "flex-end", marginTop: 48, marginEnd: 20 }}>
                    <Image source={document_filter} style={{ width: 20, height: 20 }} />
                </View>
            </View>


            <View style={{ backgroundColor: "white", height: "24%" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, backgroundColor: "#F1F1F5", bottom: 20, height: 48, width: "90%", start: 20, end: 20, top: 10, borderRadius: 8 }}>
                    <TouchableOpacity onPress={() => handleObserverColorUi("color_tin_tuc")} >
                        <View style={{ start: 20, width: 157, height: 32, backgroundColor: selected === "color_tin_tuc" || selected === null ? '#FCB71E' : '#F1F1F5', borderRadius: 8 }}>
                            <Text style={{ textAlign: 'center', lineHeight: 36, fontSize: 14, color: "#0A2745", fontWeight: 600 }}>Cuộc thi của tôi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleObserverColorUi("color_su_kien")} style={{ marginEnd: 90 }}>
                        <View style={{ start: 20, width: 157, height: 32, backgroundColor: selected === "color_su_kien" ? '#FCB71E' : '#F1F1F5', borderRadius: 8, }}>
                            <Text style={{ textAlign: 'center', lineHeight: 36, fontSize: 14, color: "#0A2745", fontWeight: 600 }}>Cuộc thi chung</Text>
                        </View>
                    </TouchableOpacity>


                </View>
            </View>


            <View>
                <TouchableOpacity onPress={onClickTest} style={{ backgroundColor: "red", width: 50, height: 50 }}>
                    <Text>Hello</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'black',
//     },
//     btn: {
//         backgroundColor: '#ff0044',
//         padding: 15,
//         borderRadius: 10,
//         margin: 10,
//         width: 160,
//     },
//     text: {
//         fontSize: 30,
//         color: 'white',
//         textAlign: 'center',
//     },
//     row: {
//         flexDirection: 'row',
//         marginBottom: 20,
//     },
// });