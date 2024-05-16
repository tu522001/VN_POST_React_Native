import { useState } from "react";

interface HomePageViewModel {
    selected: string | null;
    scrollProgress: number;
    handleObserverColorUi: (viewColor: string) => void;
    handleScroll: (event: { nativeEvent: { contentOffset: { x: number }; layoutMeasurement: { width: number }; contentSize: { width: number } } }) => void;
}

const HomePageViewModel = (): HomePageViewModel => {
    const [selected, setSelected] = useState<string | null>(null); // State để lưu trạng thái đã chọn color là null

    const handleObserverColorUi = (viewColor: string) => {
        setSelected(viewColor); // Cập nhật trạng thái đã chọn khi người dùng nhấn
    };

    // Logic ProccessBar
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const handleScroll = (event: { nativeEvent: { contentOffset: { x: number }; layoutMeasurement: { width: number }; contentSize: { width: number } } }) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const scrollPosition = contentOffset.x / (contentSize.width - layoutMeasurement.width);
        setScrollProgress(scrollPosition * 100);
    };

    return { selected, handleObserverColorUi, scrollProgress, handleScroll };
};

export default HomePageViewModel;
