import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  Container,
  StyledImageBackground,
  StyledTextInput,
  StyledTextArea,
  Header,
  HeaderTxt,
  SettingsButton,
  Footer,
  CharCount,
  ClearButton,
  ClearButtonText,
  StartBtn,
  StartImg,
  BlockBtn,
  PersonBtn,
  PersonIcon,
} from "./TextSpeechScreenStyles";
import axios from "axios";

const MAX_CHARS = 250;

const TextSpeechScreen = () => {
  const [text, setText] = useState("");
  const [textTitle, setTextTitle] = useState("");

  const [models, setModels] = useState([]);

  const clearText = () => {
    setText("");
    setTextTitle("");
  };
  const navigation = useNavigation();

  const token = useSelector((state) => state.auth.token);
  console.log("token check", token);

  const fetchModels = async () => {
    try {
      const response = await fetch(
        `https://test.api.meteoraiapps.com/api/v1/models`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setModels(data);
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
    {
      if (token) fetchModels();
    }
  }, [token]);

  const enqueueTask = async () => {
    try {
      
      

      const response = await axios.post(
        "https://test.api.meteoraiapps.com/api/v1/models/enqueue",
        {
          text: text,
          voice_id: models[0].id,
          title: textTitle,
          image: models[0].image,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        Alert.alert("Success", "Task has been enqueued successfully");
      } else {
        console.error("Request failed with status:", response.status);
        Alert.alert("Error", "Failed to enqueue the task.");
      }
    } catch (error) {
      console.error(
        "Error in POST request:",
        error?.response?.data || error.message
      );
      Alert.alert("Error", "An error occurred while sending the request.");
    }
  };

  return (
    <Container>
      <StyledImageBackground
        source={require("../../assets/bgload.png")}
        resizeMode="cover"
      >
        <Header>
          <SettingsButton onPress={() => navigation.navigate("Main")}>
            <Image
              style={{
                width: 24,
                height: 24,
                transform: [{ rotate: "180deg" }],
              }}
              source={require("../../assets/back.png")}
            />
          </SettingsButton>
          <HeaderTxt>Text to Speech</HeaderTxt>
        </Header>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <StyledTextInput
            placeholder="Write the Title..."
            placeholderTextColor="#B4B4B4"
            value={textTitle}
            onChangeText={(value) => setTextTitle(value)}
            maxLength={MAX_CHARS}
          />

          <StyledTextArea
            placeholder="Type something here..."
            placeholderTextColor="#B4B4B4"
            multiline
            value={text}
            onChangeText={(value) => setText(value)}
            maxLength={MAX_CHARS}
            style={{ textAlignVertical: "top" }}
          />

          <Footer>
            <ClearButton onPress={clearText}>
              <ClearButtonText>Clear All</ClearButtonText>
            </ClearButton>

            <CharCount>
              Chars: {text.length}/{MAX_CHARS}
            </CharCount>
          </Footer>
          <BlockBtn>
            <StartBtn onPress={enqueueTask}>
              <StartImg
                source={require("../../assets/StartBtn.png")}
              ></StartImg>
            </StartBtn>
            <PersonBtn>
              <PersonIcon
                source={require("../../assets/PersonIcon.png")}
              ></PersonIcon>
            </PersonBtn>
          </BlockBtn>
        </View>
      </StyledImageBackground>
    </Container>
  );
};

export default TextSpeechScreen;
