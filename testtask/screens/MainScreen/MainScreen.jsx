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
import sha256 from "crypto-js/sha256";
import Constants from "expo-constants";
import { setAuthToken } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

import { useFocusEffect } from "@react-navigation/native";

export const MainScreen = () => {
  const animatedStyle1 = useCircleAnimation();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pollingInterval, setPollingInterval] = useState(null);

  const dispatch = useDispatch();

  const generateChecksum = (deviceId, hasPremium, expiredAt) => {
    const hashString = `${deviceId}:${hasPremium}:${expiredAt}aboba`;
    return sha256(hashString).toString();
  };

  const devId = Constants.sessionId;
  const authenticateUser = async () => {
    const date = new Date().toISOString();

    console.log("id", devId);
    try {
      const response = await fetch(
        "https://test.api.meteoraiapps.com/api/v1/auth/jwt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            deviceId: devId,
            hasPremium: true,
            expiredAt: date,
            checksum: generateChecksum(devId, true, date),
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Токен авторизации:", data.accessToken);
        dispatch(setAuthToken(data.accessToken));
      } else {
        console.error("Ошибка при аутентификации, статус:", response.status);
        Alert.alert("Ошибка", "Не удалось выполнить аутентификацию.");
      }
    } catch (error) {
      console.error("Ошибка при аутентификации:", error);
      Alert.alert("Ошибка", "Не удалось выполнить аутентификацию.");
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await fetch(
        `https://test.api.meteoraiapps.com/api/v1/history/user/${devId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("User's generation history:", data);
        setHistory(data);
      } else {
        console.error("Error fetching history, status:", response.status);
        Alert.alert("Error", "Failed to fetch history.");
      }
    } catch (error) {
      console.error("Error fetching history:", error);
      Alert.alert("Error", "An error occurred while fetching the history.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);
  const token = useSelector((state) => state.auth.token);
  useFocusEffect(
    React.useCallback(() => {
      if (token) {
        // Начинаем поллинг при монтировании компонента
        
        const intervalId = setInterval(() => {
          fetchHistory();
        }, 1000);
        setPollingInterval(intervalId);

        return () => {
          clearInterval(intervalId);
        };
      }
    }, [token])
  );

  const handleAddStory = () => {
    if (history.length >= 3) {
      setModalVisible(true);
    } else {
      navigation.navigate("TextSpeech");
    }
  };

  const handleStoryPress = (story) => {
    navigation.navigate("TextSpeechResult", { story });
  };

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

          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : history.length === 0 ? (
            <Text>История пуста</Text>
          ) : (
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={isLoading}
                  onRefresh={fetchHistory}
                />
              }
              data={history}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Stories
                  title={item.title}
                  subTitle={item.text}
                  image={item.image}
                  generationDate={item.generationDate}
                  onPress={() => handleStoryPress(item)}
                />
              )}
            />
          )}

          <AddButton onPress={handleAddStory}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
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
