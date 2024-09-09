import React from "react";

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
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

import Tab from "../components/Tab";

const Container = styled.View`
  width: 340px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  display: flex;

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
  margin-left: 80px;
`;
const SettingsButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(10, 9, 9, 0.8);
  border-radius: 30px;
`;

const SettingsPanel = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/bgload.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Header>
          <SettingsButton onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 44, height: 44 }}
              source={require("../assets/close.png")}
            ></Image>
          </SettingsButton>
          <HeaderTxt>Settings</HeaderTxt>
        </Header>
        <Container>
          <Image
            style={{ width: 352, height: 110, marginTop: 20 }}
            source={require("../assets/banner.png")}
          ></Image>

          <SettingsPanel>
            <Tab
              text="Contact Us"
              imgSource={require("../assets/Contact.png")}
            />
            <Tab text="Term of Use" imgSource={require("../assets/file.png")} />
            <Tab
              text="Privacy policy"
              imgSource={require("../assets/Privacy.png")}
            />
            <Tab text="Subscriptions" />
          </SettingsPanel>
        </Container>
        <Container></Container>
        {/* <StatusBar theme="auto" /> */}
      </ImageBackground>
    </View>
  );
};

export default SettingsScreen;
