import { AppRegistry } from 'react-native';
import ContestScreen from './view/ContestScreen';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
import serviceFunction from './service.js'; // Đảm bảo rằng bạn đã xuất dịch vụ của mình từ file service.js

AppRegistry.registerComponent(appName, () => ContestScreen);

TrackPlayer.registerPlaybackService(() => serviceFunction);
