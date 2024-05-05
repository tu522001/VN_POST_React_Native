import { useState } from "react";

export default EditAccountScreenViewModel = () => {


    // xử lý logic TextInput
    const [username, setUsername] = useState(''); // State để lưu trạng thái đã chọn color là  rỗng ''
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dateString, setDateString] = useState('');

    // Tính toán ngày tối thiểu và ngày tối đa
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const maxDate = new Date(currentYear, 1, 1); // Ngày cuối cùng của năm hiện tại
    const minDate = new Date(currentYear - 110, 0, 1); // Ngày đầu tiên của năm 110 năm trước


    // Hàm để định dạng ngày tháng năm
    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng trong JavaScript bắt đầu từ 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`; // Định dạng DD/MM/YYYY
    };

    // Cập nhật dateString khi ngày được chọn từ DatePicker
    const handleConfirm = (selectedDate) => {
        setOpen(false);
        setDate(selectedDate);
        setDateString(formatDate(selectedDate)); // Cập nhật ngày đã chọn
    };


    const handleInputChangeUsername = (text) => {
        setUsername(text);
    };

    const handleInputChangeAdress = (text) => {
        setAdress(text);
    };

    const handleInputChangePhone = (text) => {
        setPhone(text);
    };

    const handleInputChangeEmail = (text) => {
        setEmail(text);
    };

    return { username, address, phone, email, date, open, dateString, maxDate, minDate, setOpen, handleConfirm, handleInputChangeUsername, handleInputChangeAdress, handleInputChangePhone, handleInputChangeEmail }
}