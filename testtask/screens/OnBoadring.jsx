import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

// Стили для заголовков
const TextWelcome = styled.Text`
  font-size: 36px;
  line-height: 40px;
  color: #ff40a7;
  text-align: center;
  font-weight: 700;
  font-family: "SF-Pro-Display-Heavy";
  margin-bottom: 8px;
`;

const TextSpeach = styled.Text`
  font-size: 30px;
  line-height: 34px;
  color: white;
  text-align: center;
  font-weight: 700;
  font-family: "SF-Pro-Display-Heavy";
  margin-bottom: 50px;
`;

// Стили для кнопки с градиентом
const GradientButton = styled.TouchableOpacity`
  width: 300px;
  height: 56px;
  border-radius: 20px;
  overflow: hidden;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const IndicatorDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #d1a0c7;
  margin: 0 5px;
`;

const ActiveDot = styled(IndicatorDot)`
  background-color: #ff40a7;
`;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end", // Выравнивание по вертикали внизу
    alignItems: "center", // Выравнивание по горизонтали по центру
    paddingBottom: 21, // Отступ от нижней части экрана
  },
});

const texts = ["Welcome", "Many famous "];
const subTexts = ["To Text to Speech", "Explore various options"];
const backgrounds = [
  require("../assets/Onboardingbg.png"),
  require("../assets/Onboardingbg2.png"),
];

export const OnBoadring = ({ setCurrentScreen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pressCount, setPressCount] = useState(0);

  const handlePress = () => {
    if (pressCount === 1) {
      setCurrentScreen("subscribe");
    } else {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setPressCount(pressCount + 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={backgrounds[activeIndex]}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <TextWelcome>{texts[activeIndex]}</TextWelcome>
          <TextSpeach>{subTexts[activeIndex]}</TextSpeach>

          <GradientButton onPress={handlePress}>
            <LinearGradient
              colors={["#8F21E4", "#DC1A77", "#EA1D7F"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <ButtonText>Continue</ButtonText>
            </LinearGradient>
          </GradientButton>

          <IndicatorContainer>
            {texts.map((_, index) =>
              index === activeIndex ? (
                <ActiveDot key={index} />
              ) : (
                <IndicatorDot key={index} />
              )
            )}
          </IndicatorContainer>
        </View>
        {/* <StatusBar style="auto" /> */}
      </ImageBackground>
    </View>
  );
};
