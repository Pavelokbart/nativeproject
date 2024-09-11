import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Alert,
} from "react-native";
import axios from "axios";
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
  ImageScreen,
  TextSpeech,
  styles,
  Container,
  Header,
  HeaderTxt,
  WelcomeBanner,
  WelcomeIcon,
  WelcomeTextContainer,
  WelcomeTitle,
  WelcomeSubtitle,
  DateText,
  AddButton,
  SettingsButton,
} from "./MainScreenStyles";

import { useCircleAnimation } from "../../animations/useCircleAnimation";
import { SubscriptionModal } from "../../components/Modal";
import Stories from "../../components/Stories";

export const MainScreen = () => {
  const animatedStyle1 = useCircleAnimation();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(true);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://66d94e564ad2f6b8ed541df8.mockapi.io/test")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить статьи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bgload.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Header>
          <HeaderTxt>Text to Speech</HeaderTxt>
          <SettingsButton onPress={() => navigation.navigate("Settings")}>
            <Image
              style={{ width: 19, height: 20 }}
              source={require("../../assets/settings.png")}
            ></Image>
          </SettingsButton>
        </Header>
        <Container>
          <SubscriptionModal
            visible={isModalVisible}
            onClose={() => setModalVisible(false)}
          />
          <Image
            style={{ width: 352, height: 110, marginTop: 20 }}
            source={require("../../assets/banner.png")}
          ></Image>

          {/* <WelcomeBanner>
            <WelcomeIcon source={require("../../assets/iconPerson.png")} />
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
                source={require("../../assets/back.png")}
              ></Image>
            </TouchableOpacity>
          </WelcomeBanner> */}
          <FlatList
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
            }
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Stories title={item.title} subTitle={item.text} />
            )}
          />

          <AddButton onPress={() => navigation.navigate("TextSpeech")}>
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

              <Image
                style={{ width: 80, height: 80 }}
                source={require("../../assets/addIcon.png")}
              />
            </View>
          </AddButton>
        </Container>
        <StatusBar theme="auto" />
      </ImageBackground>
    </View>
  );
};
