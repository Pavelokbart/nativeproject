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
import {
  fetchHistory,
  fetchLimit,
  authenticateUser,
} from "../../utils/apiService";

export const MainScreen = () => {
  const animatedStyle1 = useCircleAnimation();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pollingInterval, setPollingInterval] = useState(null);
  const [limit, setLimit] = useState(true);

  const dispatch = useDispatch();

  const devId = Constants.sessionId;
  const token = useSelector((state) => state.auth.token);

  const handleAuthentication = async () => {
    try {
      const accessToken = await authenticateUser(devId);
      dispatch(setAuthToken(accessToken));
    } catch (error) {
      console.error(error.message);
      Alert.alert("Ошибка", error.message);
    }
  };

  const loadHistory = async () => {
    if (token) {
      try {
        const historyData = await fetchHistory(devId, token);
        setHistory(historyData);
      } catch (error) {
        console.error(error.message);
        Alert.alert("Error", error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const checkLimit = async () => {
    try {
      const canRequest = await fetchLimit(token);
      setLimit(canRequest);
    } catch (error) {
      console.error(error.message);
      Alert.alert("Error", error.message);
    }
  };

  const handleAddStory = async () => {
    setIsLoading(true);
    const canRequest = await fetchLimit(token); 
    setIsLoading(false);

    if (!canRequest) {
      setModalVisible(true);
    } else {
      navigation.navigate("TextSpeech");
    }
  };

  useEffect(() => {
    handleAuthentication();
  }, []);

  useEffect(() => {
    

    const pollingInterval = setInterval(() => {
      if (token) {
        loadHistory();
      }
    }, 30000); 

    return () => {
      clearInterval(pollingInterval); 
    };
  }, [token]);

  useFocusEffect(
    React.useCallback(() => {
      if (token) {
        loadHistory();
      }
    }, [token])
  );

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
