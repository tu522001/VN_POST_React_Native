import { useState, useEffect } from "react";
import database from '@react-native-firebase/database';
export default DocumentsScreenViewModel = () => {

    // Sử dụng Firebase
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const ref = database().ref('/Tai_Lieu');
        ref.once('value').then(snapshot => {
            const data = snapshot.val();
            if (data) {
                // Dữ liệu tồn tại, đặt trạng thái documents
                setDocuments(Object.values(data));
            } else {
                // Xử lý trường hợp dữ liệu là null (ví dụ: hiển thị thông báo lỗi)
                console.warn('Không tìm thấy tài liệu.');
            }
        });
    }, []);

    return { documents };
}