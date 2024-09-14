import React, { useState, useEffect } from "react";
import { View, Image, Alert } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
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
import { fetchModels, enqueueTask } from "../../utils/apiService";

const MAX_CHARS = 250;

const TextSpeechScreen = () => {
  const [text, setText] = useState("");
  const [textTitle, setTextTitle] = useState("");
  const [models, setModels] = useState([]);

  const token = useSelector((state) => state.auth.token);
  const navigation = useNavigation();

  const clearText = () => {
    setText("");
    setTextTitle("");
  };

  const handleFetchModels = async () => {
    try {
      const modelsData = await fetchModels(token);
      setModels(modelsData);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch models.");
    }
  };

  const handleEnqueueTask = async () => {
    try {
      const voiceId = models[0].id;
      const image = models[0].image;

      const response = await enqueueTask(
        token,
        text,
        textTitle,
        voiceId,
        image
      );

      if (response.status === 200 || response.status === 201) {
        Alert.alert("Success", "Task has been enqueued successfully");
      } else {
        Alert.alert("Error", "Failed to enqueue the task.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while sending the request.");
    }
  };

  useEffect(() => {
    if (token) {
      handleFetchModels();
    }
  }, [token]);

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
            <StartBtn onPress={handleEnqueueTask}>
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
