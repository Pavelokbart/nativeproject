import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoadScreen } from './screens/LoadScreen/LoadScreen';
import { OnBoadring } from './screens/OnBoadring/OnBoadring';
import { SubscribeScreen } from './screens/SubscribeScreen/SubscribeScreen';
import { MainScreen } from './screens/MainScreen/MainScreen';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import TextSpeechScreen from './screens/TextSpeechScreen/TextSpeechScreen';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Load">
        {/* <Stack.Screen
          name="Load"
          component={LoadScreen}
          options={{ headerShown: false, animationEnabled: false, }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnBoadring}
          options={{ headerShown: false, animationEnabled: false, }}
        />
        <Stack.Screen
          name="Subscribe"
          component={SubscribeScreen}
          options={{ headerShown: false, animationEnabled: false, }}
        /> */}
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false, animationEnabled: false, }}
        />
        {/* <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false, animationEnabled: false, }}
        />
        <Stack.Screen
          name="TextSpeech"
          component={TextSpeechScreen}
          options={{ headerShown: false, animationEnabled: false, }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
