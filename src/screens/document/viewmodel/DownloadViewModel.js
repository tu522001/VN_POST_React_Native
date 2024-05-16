import { useEffect, useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import { PermissionsAndroid } from 'react-native';

const DownloadViewModel = () => {
    // State để theo dõi xem quyền truy cập bộ nhớ đã được cấp hay chưa
    const [permissionsGranted, setPermissionsGranted] = useState(false);

    // Sử dụng useEffect để gọi hàm requestStoragePermission khi component được render
    useEffect(() => {
        requestStoragePermission();
    }, []);

    // Hàm này được sử dụng để yêu cầu quyền truy cập bộ nhớ từ người dùng
    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Cần Quyền Truy Cập Bộ Nhớ',
                    message:
                        'Ứng dụng cần quyền truy cập bộ nhớ của bạn để tải tệp',
                }
            );
            // Nếu quyền được cấp, set permissionsGranted thành true
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setPermissionsGranted(true);
            } else {
                console.log('Quyền Truy Cập Bộ Nhớ Bị Từ Chối');
            }
        } catch (err) {
            console.log("Lỗi: " + err);
        }
    };

    // Hàm này được sử dụng để tải xuống tệp từ URL được cung cấp
    const downloadFile = (fileUrl) => {
        let date = new Date();
        let FILE_URL = fileUrl;
        let file_ext = getFileExtension(FILE_URL);
        file_ext = '.' + file_ext[0];

        const { config, fs } = RNFetchBlob;
        let RootDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                path:
                    RootDir +
                    '/file_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    file_ext,
                description: 'đang tải tệp...',
                notification: true,
                useDownloadManager: true,
            },
        };
        // Sử dụng RNFetchBlob để tải xuống tệp từ URL
        config(options)
            .fetch('GET', FILE_URL)
            .then(res => {
                console.log('Thông tin về quá trình tải xuống:', res);
                // Hiển thị thông báo hoặc xử lý kết quả tải xuống ở đây (đã bị comment lại)
            })
            .catch(error => {
                console.log('Lỗi trong quá trình tải xuống:', error);
                // Hiển thị thông báo hoặc xử lý lỗi khi tải xuống (đã bị comment lại)
            });
    };

    // Hàm này được sử dụng để lấy phần mở rộng của tệp từ URL
    const getFileExtension = (fileUrl) => {
        return /[.]/.exec(fileUrl) ?
            /[^.]+$/.exec(fileUrl) : undefined;
    };

    // Trả về các hàm và state cần thiết để sử dụng trong component khác
    return {
        permissionsGranted,
        downloadFile
    };
};

export default DownloadViewModel;
