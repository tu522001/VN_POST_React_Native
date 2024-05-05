const truncateText = (text, maxLength = 40) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...'; // Cắt chuỗi và thêm dấu ba chấm
    } else {
        return text;
    }
};

export { truncateText };