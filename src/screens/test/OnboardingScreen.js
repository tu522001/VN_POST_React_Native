// OnboardingScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import slides from "../../../slides";

const OnboardingScreen = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const totalSlides = slides.length;

    const handleNextSlide = () => {
        if (currentSlideIndex < totalSlides - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        } else {
            navigation.navigate('Main');
        }
    };

    const handleSkip = () => {
        navigation.navigate('Main');
    };

    const renderSlide = (slide) => {
        return (
            <View key={slide.id} style={styles.slideContainer}>
                <Image source={slide.image} style={styles.image} />
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.description}>{slide.description}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.slidesContainer}>
                {slides.map((slide, index) => {
                    return (
                        index === currentSlideIndex && renderSlide(slide)
                    );
                })}
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Next"
                    onPress={handleNextSlide}
                    disabled={currentSlideIndex === totalSlides - 1}
                />
                <Button
                    title="Skip"
                    onPress={handleSkip}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slidesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
});

export default OnboardingScreen;
