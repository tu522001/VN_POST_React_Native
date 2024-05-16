// HomeScreen.tsx
import React, { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, Platform, StatusBar, ScrollView } from "react-native";
import { useProductViewModel } from "../viewmodel/ProductViewModel";
import { truncateText } from "../../../utils/TruncateText";
import styles from "../styles/HomePageScreenStyle";
import { avatar, arrow_right_square, star, organization, group, notification } from '../../../assets/images/HomePageScreenImage';
import HomePageViewModel from "../viewmodel/HomePageViewModel";
import { useSelected } from "../../../utils/SelectedContext";
import ViewProgressBar from '../../../utils/ViewProgressBar';

interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
}

interface HomePageScreenProps {
    navigation: any;
}

export default function HomePageScreen({ navigation }: HomePageScreenProps) {
    const productViewModel = useProductViewModel();
    const { selected, handleObserverColorUi, scrollProgress, handleScroll } = HomePageViewModel(); // Sử dụng phần xử lý logic
    const { username } = useSelected();

    useEffect(() => {
        productViewModel.getProducts();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false // Ẩn thanh chứa (action bar)
        });
    }, [navigation]);

    const handleItemClick = (item: Product, index: number) => {
        // Xử lý sự kiện khi người dùng click vào một item
        console.log("Clicked item:", item.title);
        console.log("Position:", index);
    };

    const handleOnClickInFo = () => {
        navigation.navigate("AccountScreen");
        console.log("Vao Account");
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FCB71E" barStyle="light-content" />
            <ScrollView>
                <View style={{ width: "100%", height: 90, backgroundColor: "#FCB71E", flexDirection: "row", alignItems: 'center' }}>
                    <View style={{ flex: 1, marginTop: 48 }}>
                        <Text style={{ marginStart: 40, lineHeight: 24, fontWeight: '500', color: "#0A2745", textAlign: 'center', fontSize: 16 }}>VNP E-learning</Text>
                    </View>
                    <View>
                        <Image style={{ height: 32, width: 32, marginEnd: 20, marginTop: 48 }} source={notification} />
                    </View>
                </View>

                <View style={{ width: "100%", height: 44, backgroundColor: "#FCB71E" }}>
                    <View style={{
                        width: "93%", height: 88, marginStart: 15,
                        marginEnd: 15, borderRadius: 8, backgroundColor: "white", flexDirection: "row"
                    }}>
                        <TouchableOpacity onPress={handleOnClickInFo}>
                            <View>
                                <Image style={styles.image_avatar} source={avatar} />
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 16, lineHeight: 24, color: "#0A2745", fontWeight: '500',
                                marginTop: 23,
                                marginStart: 20,
                            }}>Xin chào {username}</Text>
                            <Text style={{
                                fontWeight: '400', lineHeight: 18,
                                marginStart: 20, color: "#696974", fontSize: 12,
                            }}>Mã nhân viên: 00113320</Text>
                        </View>
                        <Image style={{
                            position: 'absolute',
                            marginTop: 32,
                            left: 320,
                            height: 24,
                            width: 24,
                        }} source={arrow_right_square} />
                    </View>
                </View>

                <View style={{ marginStart: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ marginTop: 70, lineHeight: 22, fontSize: 14, fontWeight: 600, color: "#0A2745" }}>Khoá học nổi bật</Text>
                        <Text style={{ marginTop: 73, lineHeight: 18, fontSize: 12, fontWeight: 600, color: "#3B76AC", marginEnd: 15 }}>Xem thêm</Text>
                    </View>

                    <FlatList
                        style={{ marginTop: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false} // ẩn vector scroll theo chiều ngang
                        data={productViewModel.products as Product[]}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity activeOpacity={1} onPress={() => handleItemClick(item, index)}>
                                <View style={styles.item_container_news}>
                                    <Image source={{ uri: item.image }} style={styles.item_image_outstanding_course} />
                                    <View style={styles.text_outstanding_course}>
                                        <Text style={styles.title_outstanding_course}>{truncateText(item.title)}</Text>
                                        <View style={styles.view_contraint}>
                                            <Image style={{
                                                marginEnd: 5,
                                                marginStart: 15,
                                                height: 16,
                                                width: 16,
                                            }} source={organization} />
                                            <Text>Tổng công ty</Text>
                                            <Text style={styles.description_outstanding_course}>{truncateText(item.price)}</Text>
                                            <Image style={{
                                                marginTop: 2,
                                                marginStart: 170,
                                                height: 16,
                                                width: 16,
                                                position: 'absolute',
                                                resizeMode: "contain",
                                            }} source={star} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                        onScroll={handleScroll}
                    />
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", marginTop: 15 }}>
                    <ViewProgressBar progress={scrollProgress} />
                </View>
                <View style={{ marginStart: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                        <TouchableOpacity onPress={() => handleObserverColorUi("color_tin_tuc")}>
                            <View style={{ width: 100, height: 36, backgroundColor: selected === "color_tin_tuc" || selected === null ? '#FCB71E' : 'transparent', borderRadius: 30 }}>
                                <Text style={{ textAlign: 'center', lineHeight: 36, fontSize: 14, color: "#0A2745", fontWeight: 600 }}>Tin tức</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleObserverColorUi("color_su_kien")} style={{ marginEnd: 120 }}>
                            <View style={{ width: 100, height: 36, backgroundColor: selected === "color_su_kien" ? '#FCB71E' : 'transparent', borderRadius: 30 }}>
                                <Text style={{ textAlign: 'center', lineHeight: 36, fontSize: 14, color: "#0A2745", fontWeight: 600 }}>Sự kiện</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={{ lineHeight: 18, fontSize: 12, fontWeight: "600", color: "#3B76AC", marginEnd: 15 }}>Xem thêm</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        nestedScrollEnabled
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false} // ẩn vector scroll 
                        data={productViewModel.products as Product[]}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => handleItemClick(item, index)}>
                                <View style={styles.item_container_outstanding_course}>
                                    <View >
                                        <Image source={{ uri: item.image }} style={styles.image} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>{truncateText(item.title)}</Text>
                                        <Text style={styles.description}>{truncateText(item.description)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>

                <View style={{ marginStart: 15, marginBottom: 50 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginTop: 30, lineHeight: 22, fontSize: 14, fontWeight: 600, color: "#0A2745", marginEnd: 15, width: 133, height: 22 }}>Giảng viên xuất sắc</Text>
                    </View>

                    <FlatList
                        scrollEnabled={false}
                        horizontal
                        showsHorizontalScrollIndicator={false} // ẩn vector scroll 
                        data={productViewModel.products as Product[]}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => handleItemClick(item, index)}>
                                <View style={{ width: 120, height: 178, marginEnd: 20, marginTop: 10 }}>
                                    <View >
                                        <Image source={{ uri: item.image }} style={{ width: 120, height: 120, borderRadius: 60 }} />
                                        <View style={{ alignItems: "center" }}>
                                            <Image source={group} style={{ width: 50, height: 16 }} />
                                            <Text style={styles.title}>{truncateText(item.id.toString())}</Text>
                                            <Text style={styles.description}>{truncateText(item.price)}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
