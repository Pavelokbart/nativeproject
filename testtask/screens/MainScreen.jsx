import React, { useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
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
  },
  circle: {
    position: "absolute",
    borderColor: "#B31EB2",
    borderWidth: 3, // Adjust this value for thinner/thicker circles
    borderRadius: 100,
    borderWidth: 6,
  },
});

const Container = styled.View`
  width: 340px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  margin-top: 40px;
`;

const HeaderTxt = styled.Text`
  font-size: 24px;
  line-height: 40px;
  color: white;
  font-weight: 600;
`;
const SettingsButton = styled.TouchableOpacity``;

const WelcomeBanner = styled.View`
  background-color: rgba(147, 144, 144, 0.1);
  border-radius: 16px;
  width: 352px;
  height: 84px;
  padding: 20px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

const WelcomeIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const WelcomeTextContainer = styled.View`
  flex-direction: column;
  margin-left: 8px;
`;

const WelcomeTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const WelcomeSubtitle = styled.Text`
  color: #b4b4b4;
  font-size: 14px;
`;

const DateText = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-left: -60px;
  margin-bottom: 10px;
`;
const AddButton = styled.TouchableOpacity`
  margin-top: 300px;
`;

export const MainScreen = () => {
  const scale1 = useSharedValue(1);
  const opacity1 = useSharedValue(1);
  const navigation = useNavigation();

  useEffect(() => {
    // Animation for the circles
    scale1.value = withRepeat(
      withTiming(1.5, {
        duration: 4000,
        easing: Easing.out(Easing.exp),
      }),
      -1
    );

    opacity1.value = withRepeat(
      withTiming(0, {
        duration: 4000,
        easing: Easing.out(Easing.exp),
      }),
      -1
    );
  }, []);

  const animatedStyle1 = useAnimatedStyle(() => ({
    transform: [{ scale: scale1.value }],
    opacity: opacity1.value,
  }));
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/bgload.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Header>
          <HeaderTxt>Text to Speech</HeaderTxt>
          <SettingsButton onPress={() => navigation.navigate("Settings")}>
            <Image
              style={{ width: 19, height: 20 }}
              source={require("../assets/settings.png")}
            ></Image>
          </SettingsButton>
        </Header>
        <Container>
          <Image
            style={{ width: 352, height: 110, marginTop: 20 }}
            source={require("../assets/banner.png")}
          ></Image>

          <WelcomeBanner>
            <WelcomeIcon source={require("../assets/iconPerson.png")} />
            <WelcomeTextContainer>
              <WelcomeTitle>Welcome</WelcomeTitle>
              <WelcomeSubtitle>
                Welcome to Text to Speech, this app...
              </WelcomeSubtitle>
            </WelcomeTextContainer>
            <DateText>06.02.2024</DateText>
            <TouchableOpacity style={{ paddingLeft: 8, paddingRight: 18 }}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/back.png")}
              ></Image>
            </TouchableOpacity>
          </WelcomeBanner>
          <AddButton
            onPress={() => navigation.navigate("TextSpeech")}
            style={{ marginTop: 300 }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {/* Animated circles */}
              <Animated.View
                style={[
                  styles.circle,
                  {
                    width: 100,
                    height: 100,
                  },
                  animatedStyle1,
                ]}
              />
              <Animated.View
                style={[
                  styles.circle,
                  {
                    width: 150,
                    height: 150,
                  },
                  animatedStyle1,
                ]}
              />

              {/* Add button icon */}
              <Image
                style={{ width: 80, height: 80 }}
                source={require("../assets/addIcon.png")}
              />
            </View>
          </AddButton>
        </Container>
        <StatusBar theme="auto" />
      </ImageBackground>
    </View>
  );
};
