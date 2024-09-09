import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { ImageScreen, TextSpeech, styles } from "./LoadScreenStyles";
import { useScalingOpacityAnimation } from "../../animations/useScalingOpacityAnimation ";

export const LoadScreen = () => {
  const animatedStyle = useScalingOpacityAnimation();
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bgload.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Animated.View style={[styles.square, animatedStyle]} />
          <Animated.View
            style={[styles.square, { width: 250, height: 250 }, animatedStyle]}
          />
          <Animated.View
            style={[styles.square, { width: 300, height: 300 }, animatedStyle]}
          />

          <ImageScreen source={require("../../assets/ico_AppStore.png")} />
          <TextSpeech>Text to Speech</TextSpeech>
        </View>
        <StatusBar theme="auto" />
      </ImageBackground>
    </View>
  );
};
