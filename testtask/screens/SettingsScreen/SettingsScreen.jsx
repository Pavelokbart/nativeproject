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
import {
  styles,
  Container,
  Header,
  HeaderTxt,
  SettingsButton,
  SettingsPanel,
} from "./SettingsScreenStyles";

import Tab from "../../components/Tab";

const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bgload.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Header>
          <SettingsButton onPress={() => navigation.navigate("Main")}>
            <Image
              style={{ width: 44, height: 44 }}
              source={require("../../assets/close.png")}
            ></Image>
          </SettingsButton>
          <HeaderTxt>Settings</HeaderTxt>
        </Header>
        <Container>
          <Image
            style={{ width: 352, height: 110, marginTop: 20 }}
            source={require("../../assets/banner.png")}
          ></Image>

          <SettingsPanel>
            <Tab
              text="Contact Us"
              imgSource={require("../../assets/Contact.png")}
            />
            <Tab
              text="Term of Use"
              imgSource={require("../../assets/file.png")}
            />
            <Tab
              text="Privacy policy"
              imgSource={require("../../assets/Privacy.png")}
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
