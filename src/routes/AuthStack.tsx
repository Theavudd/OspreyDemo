import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/auth/login';
import OTP from '../screens/auth/otp';
import Password from '../screens/auth/Password';
import Names from '../utils/constant/componentNameStrings';

const AuthStacks = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <AuthStacks.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={Names.OTP}
    >
      <AuthStacks.Screen name={Names.Login} component={Login} />
      <AuthStacks.Screen name={Names.Password} component={Password} />
      <AuthStacks.Screen name={Names.OTP} component={OTP} />
    </AuthStacks.Navigator>
  );
}
