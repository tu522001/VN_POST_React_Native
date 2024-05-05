import { View, StyleSheet, FlatList, Animated } from "react-native";
import slides from "../../../slides";
import OnboardingItem from "./OnboardingItem";
import React, { useState, useRef } from "react";


export default Onboardings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null)
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={{ flex: 3 }}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsVerticalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{
          natoveEvent: {
            contentOffset: { x: scrollX }
          }
        }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: 'flex-end', // Căn chỉnh theo chiều ngang

  },

  text: {
    color: "#696974",
    fontFamily: "Inter",
    fontSize: 12
  }
})