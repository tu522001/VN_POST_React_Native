import { useState } from "react";

const CourseScreenViewModel = () => {
    // Định nghĩa kiểu dữ liệu cho state colorButton là boolean
    const [colorButton, setColor] = useState<boolean>(false);

    // Định nghĩa kiểu dữ liệu cho hàm handleObserverColorUi
    const handleObserverColorUi = (): void => {
        setColor(!colorButton);
    };

    // Trả về object với kiểu dữ liệu
    return { colorButton, handleObserverColorUi };
};

export default CourseScreenViewModel;
