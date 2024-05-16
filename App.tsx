// App.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import HomeScreen from './src/navigation/view/BottomNavigation';
import LoginScreen from './src/screens/Login/view/LoginScreen';
import ForgotPasswordScreen from './src/screens/Login/view/ForgotPasswordScreen';
import EditAccount from './src/screens/edit_account_information/view/EditAccountScreen'
import { SelectedProvider } from './src/utils/SelectedContext'; // Import SelectedProvider

import OnBoardingScreen from './src/screens/boardings/view/OnBoardingScreen';
import DetailedDocuments from './src/screens/document/view/DetailedDocuments';
import FeedbackScreen from './src/screens/feedback/view/FeedbackScreen'
import ChangePassword from './src/screens/account/view/ChangePassword'
import AsyncStorage from '@react-native-async-storage/async-storage';
import TestScreen from './src/screens/test/view/TestScreen';
import ExamEntranceScreen from './src/screens/test/view/ExamEntranceScreen';
import AccountScreen from './src/screens/account/view/AccountScreen';


type RootStackList = {
  OnBoardingScreen: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  DetailedDocuments: undefined;
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  HomeScreen: undefined;
  EditAccountScreen: undefined;
  FeedbackScreen: undefined;
  ChangePassword: undefined;
  TestScreen: undefined;
  ExamEntranceScreen: undefined;
  AccountScreen: undefined;

};

const Stack = createStackNavigator<RootStackList>();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const value = await AsyncStorage.getItem('onboardingComplete');
      setIsOnboardingComplete(value === 'true');
      setIsLoading(false);
    };

    checkOnboardingStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <SelectedProvider>
      <NavigationContainer>
        <Stack.Navigator>

          {!isOnboardingComplete && (
            <Stack.Screen options={{ headerShown: false }} name="OnBoardingScreen" component={OnBoardingScreen} />
          )}
          <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />

          <Stack.Screen options={{
            title: "Bài thi số 1",
            headerTintColor: "#171725",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16, // Đặt kích thước chữ mong muốn ở đây
              fontWeight: 500,
              lineHeight: 24,
            },

          }} name="TestScreen" component={TestScreen} />



          <Stack.Screen options={{
            headerShown: false
          }} name="ExamEntranceScreen" component={ExamEntranceScreen} />

          <Stack.Screen options={{
            title: "Chi tiết tài liệu",
            headerTintColor: "#171725",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16, // Đặt kích thước chữ mong muốn ở đây
              fontWeight: "500",
              lineHeight: 24,
            },

          }} name="DetailedDocuments" component={DetailedDocuments} />

          <Stack.Screen options={
            {
              title: "Lấy lại mật khẩu",
              headerTintColor: "black",
              headerTitleAlign: "center"
            }
          } name="ForgotPasswordScreen" component={ForgotPasswordScreen} />


          <Stack.Screen name="AccountScreen" component={AccountScreen} />

          <Stack.Screen options={
            {
              // headerStyle: {
              //   backgroundColor: "#FCB71E"
              // },

              // headerLeft: () => null, // Ẩn nút back cho màn hình HomeScreen,
              // title: "VNP E-learning", // Title
              // headerTintColor: "black", // text color
              // headerTitleAlign: "center", // text center
              headerShown: false
            }
          } name="HomeScreen" component={HomeScreen} />

          <Stack.Screen options={{
            title: "Sửa thông tin tài khoản",
            headerTintColor: "#171725",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16, // Đặt kích thước chữ mong muốn ở đây
              fontWeight: 500,
              lineHeight: 24,
            },

          }} name="EditAccountScreen" component={EditAccount} />

          <Stack.Screen options={{
            title: "Phản hồi",
            headerTintColor: "#171725",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16, // Đặt kích thước chữ mong muốn ở đây
              fontWeight: 500,
              lineHeight: 24,
            },

          }} name="FeedbackScreen" component={FeedbackScreen} />
          <Stack.Screen options={{
            title: "Đổi mật khẩu",
            headerTintColor: "#171725",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16, // Đặt kích thước chữ mong muốn ở đây
              fontWeight: 500,
              lineHeight: 24,
            },

          }} name="ChangePassword" component={ChangePassword} />

        </Stack.Navigator>

      </NavigationContainer>
    </SelectedProvider>
  );
};
export default App;







