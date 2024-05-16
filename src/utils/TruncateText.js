const truncateText = (text, maxLength = 40) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...'; // Cắt chuỗi và thêm dấu ba chấm
    } else {
        return text;
    }
};

// Kiểm tra xem chuỗi có hơn 35 ký tự không
const truncateTextView = (text, maxCharacters) => {
    if (text.length > maxCharacters) {
        // Tìm vị trí của từ cuối cùng trong chuỗi
        const lastSpaceIndex = text.lastIndexOf(" ", maxCharacters);

        // Nếu không tìm thấy khoảng trắng, hiển thị toàn bộ chuỗi
        const displayText = lastSpaceIndex !== -1 ? text.substring(0, lastSpaceIndex) + "\n" + text.substring(lastSpaceIndex + 1) : text;

        return displayText; // Trả về chuỗi đã được cắt ngắn và có xuống dòng
    } else {
        return text; // Trả về toàn bộ chuỗi
    }
};

export { truncateText, truncateTextView };