import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoadScreen } from './screens/LoadScreen';
import { OnBoadring } from './screens/OnBoadring';
import { SubscribeScreen } from './screens/SubscribeScreen';
import { MainScreen } from './screens/MainScreen';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from './screens/SettingsScreen';
import TextSpeechScreen from './screens/TextSpeechScreen';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  // const [currentScreen, setCurrentScreen] = useState('loading');

  // useEffect(() => {
  //   if (currentScreen === 'loading') {
  //     const timer = setTimeout(() => {
  //       setCurrentScreen('onboarding');
  //     }, 3000); // Переход через 3 секунды

  //     return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  //   }
  // }, [currentScreen]);

  // return (
  //   <View style={{ flex: 1 }}>
  //     {currentScreen === 'loading' && <LoadScreen />}
  //     {currentScreen === 'onboarding' && <OnBoadring setCurrentScreen={setCurrentScreen} />}
  //     {currentScreen === 'subscribe' && <SubscribeScreen />}
  //   </View>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }} // Убрать заголовок
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }} // Убрать заголовок
        />
        <Stack.Screen
          name="TextSpeech"
          component={TextSpeechScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }} // Убрать заголовок
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}