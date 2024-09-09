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

const ImageScreen = styled.Image`
  margin-top: 70px;
  width: 160px;
  height: 160px;
`;

const TextSpeech = styled.Text`
  font-size: 36px;
  line-height: 40px;
  color: white;
  text-align: center;
  margin-top: 40px;
  font-weight: 700;
  font-family: "SF-Pro-Display-Heavy";
`;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    position: "absolute",
    borderColor: "#B31EB2",
    borderWidth: 15,
    borderRadius: 70,
    width: 250,
    height: 250,
  },
});

export const LoadScreen = () => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, {
        duration: 5000,
        easing: Easing.out(Easing.exp),
      }),
      -1
    );

    opacity.value = withRepeat(
      withTiming(0, {
        duration: 5000,
        easing: Easing.out(Easing.exp),
      }),
      -1
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/bgload.png")}
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

          <ImageScreen source={require("../assets/ico_AppStore.png")} />
          <TextSpeech>Text to Speech</TextSpeech>
        </View>
        <StatusBar theme="auto" />
      </ImageBackground>
    </View>
  );
};
