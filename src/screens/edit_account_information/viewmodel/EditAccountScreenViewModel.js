import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { useSelected } from '../../../utils/SelectedContext';
import * as ImagePicker from 'react-native-image-picker';  // Xử lý EditImage
export default EditAccountScreenViewModel = () => {

    const { isSelected, setIsSelected, username, setUsername, address, setAdress, phone, setPhone, email, setEmail } = useSelected();

    /* Xử lý logic giới tính */
    const handleObserverColorUi = async (viewColor) => {
        setIsSelected(viewColor); // Cập nhật trạng thái đã chọn khi người dùng nhấn
        await saveCredentials(); // Lưu trạng thái sau khi cập nhật
    };

    const handleInputChangeUsername = async (text) => {
        setUsername(text); // Cập nhật trạng thái đã chọn khi người dùng nhấn
        await saveCredentials(); // Lưu trạng thái sau khi cập nhật
    };

    const handleInputChangeAdress = async (text) => {
        setAdress(text); // Cập nhật trạng thái đã chọn khi người dùng nhấn
        await saveCredentials(); // Lưu trạng thái sau khi cập nhật
    };


    const handleInputChangePhone = async (text) => {
        // Nếu text rỗng hoặc ký tự đầu tiên là '0', cập nhật state
        if (text === '' || text[0] === '0') {
            setPhone(text); // Cập nhật trạng thái đã chọn khi người dùng nhấn
            await saveCredentials(); // Lưu trạng thái sau khi cập nhật
        }
        // Ngược lại, nếu ký tự đầu tiên không phải là '0', không làm gì cả
    };

    const handleInputChangeEmail = async (text) => {
        setEmail(text); // Cập nhật trạng thái đã chọn khi người dùng nhấn
        await saveCredentials(); // Lưu trạng thái sau khi cập nhật
    };



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
    // const [username, setUsername] = useState(''); // State để lưu trạng thái đã chọn color là  rỗng ''
    // const [address, setAdress] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');

    // const handleInputChangeUsername = (text) => {
    //     setUsername(text);
    // };

    // const handleInputChangeAdress = (text) => {
    //     setAdress(text);
    // };

    // const handleInputChangePhone = (text) => {
    //     // Nếu text rỗng hoặc ký tự đầu tiên là '0', cập nhật state
    //     if (text === '' || text[0] === '0') {
    //         setPhone(text);
    //     }
    //     // Ngược lại, nếu ký tự đầu tiên không phải là '0', không làm gì cả
    // };

    // const handleInputChangeEmail = (text) => {
    //     setEmail(text);
    // };

    /* xử lý logic lưu dữ liệu vào AsyncStorage */
    const saveCredentials = async () => {
        try {

            // Lưu trạng thái isSelected vào AsyncStorage
            await AsyncStorage.setItem('isSelected', JSON.stringify(isSelected));

            // // Chuyển đổi giá trị boolean thành chuỗi trước khi lưu vì AsyncStorage chỉ lưu kiểu chuỗi
            // const isSelectedString = JSON.stringify(isSelected);

            // Lưu tên người dùng và mật khẩu vào AsyncStorage
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('address', address);
            await AsyncStorage.setItem('phone', phone);
            await AsyncStorage.setItem('email', email);
            // await AsyncStorage.setItem('isSelected', isSelectedString)
            await AsyncStorage.setItem('dateString', dateString); // Lưu dateString vào AsyncStorage

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
            const storedDataTime = await AsyncStorage.getItem('dateString');
            // const storedIsSelected = await AsyncStorage.getItem('isSelected'); // Lấy giá trị đã lưu
            const storedIsSelected = await AsyncStorage.getItem('isSelected'); // Lấy giá trị đã lưu
            // Chuyển đổi chuỗi trở lại thành boolean
            const isSelectedBoolean = storedIsSelected ? JSON.parse(storedIsSelected) : false;
            // Cập nhật trạng thái isSelected
            setIsSelected(isSelectedBoolean);
            // Chuyển đổi chuỗi trở lại thành boolean
            // const isSelectedBoolean = storedIsSelected ? JSON.parse(storedIsSelected) : false;
            // Cập nhật placeholder của các TextInput
            // handleInputChangeUsername(storedUsername || '');
            setUsername(storedUsername || '')
            setAdress(storedAddress || '');
            setPhone(storedPhone || '');
            setEmail(storedEmail || '');
            setDateString(storedDataTime || '')
            // setIsSelectedSex(isSelectedBoolean); // Cập nhật trạng thái đã chọn
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
        }
    }

    // Gọi hàm cập nhật placeholder khi component được render
    useEffect(() => {
        updatePlaceholder();
    }, []);


    // /* Xử lý logic giới tính*/
    // const [isSelected, setIsSelectedSex] = useState(false)

    // const handleObserverColorUi = async (viewColor) => {
    //     setIsSelectedSex(viewColor);// Cập nhật trạng thái đã chọn khi người dùng nhấn
    //     await saveCredentials(); // Lưu trạng thái sau khi cập nhật
    // }



    return { username, address, phone, email, date, open, dateString, maxDate, minDate, isSelected, handleObserverColorUi, saveCredentials, setOpen, handleConfirm, handleInputChangeUsername, handleInputChangeAdress, handleInputChangePhone, handleInputChangeEmail }
}