import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
export default EditAccountScreenViewModel = () => {

    /* xử lý logic DatePicker */
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




    /* xử lý logic TextInput */
    const [username, setUsername] = useState(''); // State để lưu trạng thái đã chọn color là  rỗng ''
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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

    /* xử lý logic lưu dữ liệu vào AsyncStorage */
    const saveCredentials = async () => {
        try {
            // Lưu tên người dùng và mật khẩu vào AsyncStorage
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('address', address);
            await AsyncStorage.setItem('phone', phone);
            await AsyncStorage.setItem('email', email);

            console.log('Thông báo Tài khoản đã được lưu thành công!');
        } catch (error) {
            console.error('Lỗi khi lưu tài khoản:', error);
            return { username: null, address: null, phone: null, email: null };
        }
    };

    /* xử lý logic hiển thị dữ liệu từ AsyncStorage vào TextInput*/
    const updatePlaceholder = async () => {
        try {
            const storedUsername = await AsyncStorage.getItem('username');
            const storedAddress = await AsyncStorage.getItem('address');
            const storedPhone = await AsyncStorage.getItem('phone');
            const storedEmail = await AsyncStorage.getItem('email');

            // Cập nhật placeholder của các TextInput
            handleInputChangeUsername(storedUsername || '');
            handleInputChangeAdress(storedAddress || '');
            handleInputChangePhone(storedPhone || '');
            handleInputChangeEmail(storedEmail || '');
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
        }
    }

    // Gọi hàm cập nhật placeholder khi component được render
    useEffect(() => {
        updatePlaceholder();
    }, []);


    return { username, address, phone, email, date, open, dateString, maxDate, minDate, saveCredentials, setOpen, handleConfirm, handleInputChangeUsername, handleInputChangeAdress, handleInputChangePhone, handleInputChangeEmail }
}