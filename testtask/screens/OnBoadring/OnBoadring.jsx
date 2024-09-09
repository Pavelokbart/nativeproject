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

import { useNavigation } from "@react-navigation/native";
import {
  TextWelcome,
  TextSpeach,
  GradientButton,
  ButtonText,
  IndicatorContainer,
  IndicatorDot,
  ActiveDot,
  styles,
} from "./OnBoadringStyles";

const texts = ["Welcome", "Many famous "];
const subTexts = ["To Text to Speech", "Explore various options"];
const backgrounds = [
  require("../../assets/Onboardingbg.png"),
  require("../../assets/Onboardingbg2.png"),
];

export const OnBoadring = () => {
  const [pressCount, setPressCount] = useState(0);
  const navigation = useNavigation();

  const handlePress = () => {
    setPressCount((prevCount) => prevCount + 1);

    if (pressCount === 1) {
      navigation.replace("Subscribe");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={backgrounds[pressCount]}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <TextWelcome>{texts[pressCount]}</TextWelcome>
          <TextSpeach>{subTexts[pressCount]}</TextSpeach>

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
              index === pressCount ? (
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
