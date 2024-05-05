import { useState } from "react";

export default HomePageViewModel = () => {
    const [selected, setSelected] = useState(null);  // State để lưu trạng thái đã chọn color là null

    const handleObserverColorUi = (viewColor) => {
        setSelected(viewColor);// Cập nhật trạng thái đã chọn khi người dùng nhấn
    }
    return { selected, handleObserverColorUi };
}