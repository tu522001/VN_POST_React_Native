// module.exports = {
//     plugins: [
//         [
//             'module-resolver',
//             {
//                 alias: {
//                     src: './src',
//                     '@assets': './src/assets',
//                     '@components': './src/components',
//                     '@css': './src/css',
//                     '@device': './src/device',
//                     '@helpers': './src/helpers',
//                     '@navigation': './src/navigation',
//                     '@redux_manager': './src/redux_manager',
//                     '@screens': './src/screens',
//                     '@utils': './src/utils',
//                 },
//             },
//         ],
//     ],
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['./src'], // Đường dẫn gốc của ứng dụng
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Các phần mở rộng tệp tin bạn muốn sử dụng
        alias: {
          // Các alias bạn muốn định nghĩa, ví dụ:
          components: './src/components',
          screens: './src/screens',
          utils: './src/utils',
          // Thêm các alias khác nếu cần thiết
        },
      },
    ],
  ],
};
