// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, StatusBar } from 'react-native';
import HomeScreen from './src/navigation/view/BottomNavigation';
import LoginScreen from './src/screens/Login/view/LoginScreen';
import ForgotPasswordScreen from './src/screens/Login/view/ForgotPasswordScreen';
import EditAccount from './src/screens/edit_account_information/view/EditAccountScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={
          {
            title: "Lấy lại mật khẩu",
            headerTintColor: "black",
            headerTitleAlign: "center"
          }
        } name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
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

      </Stack.Navigator>


    </NavigationContainer>
  );


};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     padding: 30
//   }
// })

export default App;

