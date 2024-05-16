// CountdownTimerViewModel.ts
import { useState, useEffect } from 'react';
import { data } from "../../../data/models/ExamEntranceModel"
import { FlatList } from "react-native";
import { useRef } from "react";

/* Xử lý Logic Bộ đếm thời gian đồng hồ */

const useCountdownTimer = (initialTime: number) => {

    // Đặt thời gian ban đầu là 15 phút (15 * 60 giây)
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);

    // Hàm định dạng thời gian dưới dạng HH:MM:SS
    const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // useEffect để cập nhật thời gian mỗi giây
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            // Clear interval khi component unmount
            return () => clearInterval(timerId);
        }
    }, [timeLeft]);



    /* Xử lý click vào item */
    const [selectBackgroundColorsItem, setSelectBackgroundColorsItem] = useState<number | null>(null)

    const handleSelectBackgroundColorsItem = (itemID: number) => {
        setSelectBackgroundColorsItem(itemID);
        console.log("itemID : " + itemID)
    };


    // 
    const flatListRef = useRef<FlatList>(null);

    const handleNext = () => {
        if (flatListRef.current) {
            const currentIndex = selectBackgroundColorsItem ? data.findIndex(item => item.id === selectBackgroundColorsItem) : -1;
            const nextIndex = currentIndex !== -1 && currentIndex !== data.length - 1 ? currentIndex + 1 : currentIndex;
            if (nextIndex !== -1) {
                flatListRef.current.scrollToIndex({ index: nextIndex });
                setSelectBackgroundColorsItem(data[nextIndex].id);
                console.log("data[nextIndex].id : " + nextIndex)
            }
        }
    };

    const handlePrevious = () => {
        if (flatListRef.current) {
            const currentIndex = selectBackgroundColorsItem ? data.findIndex(item => item.id === selectBackgroundColorsItem) : -1;
            const previousIndex = currentIndex !== -1 && currentIndex !== 0 ? currentIndex - 1 : currentIndex;
            if (previousIndex !== -1) {
                flatListRef.current.scrollToIndex({ index: previousIndex });
                setSelectBackgroundColorsItem(data[previousIndex].id);
            }
        }
    }

    return { timeLeft, formatTime, selectBackgroundColorsItem, setSelectBackgroundColorsItem, handleSelectBackgroundColorsItem, flatListRef, handleNext, handlePrevious };
};

export default useCountdownTimer;
