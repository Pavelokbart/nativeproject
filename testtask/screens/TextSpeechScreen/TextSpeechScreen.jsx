import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
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

const MAX_CHARS = 250;

const TextSpeechScreen = () => {
  const [text, setText] = useState("");
  const [textTitle, setTextTitle] = useState("");

  const clearText = () => {
    setText("");
    setTextTitle("");
  };
  const navigation = useNavigation();
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
            <StartBtn>
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
