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

const MAX_CHARS = 250; // Maximum allowed characters

const Container = styled.View`
  flex: 1;
`;

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
`;

const StyledTextInput = styled.TextInput`
  width: 320px;
  height: 58px;
  border-width: 1px;
  border-color: #6f6b6b;
  background-color: rgba(147, 144, 144, 0.1);
  border-radius: 20px;
  padding: 10px;
  color: white;
  font-size: 18px;
  margin-top: 40px;
  color: #bcbcbc;
`;

const StyledTextArea = styled.TextInput`
  width: 320px;
  height: 202px;
  border-width: 1px;
  border-color: #6f6b6b;
  border-radius: 20px;
  padding: 10px;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  background-color: rgba(82, 78, 78, 0.1);
  color: #bcbcbc;
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
  font-size: 20px;
  line-height: 24px;
  color: white;
  font-weight: 600;
  margin-left: 60px;
`;

const SettingsButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(10, 9, 9, 0.8);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.View`
  flex-direction: row;
  gap: 170px;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
`;

const CharCount = styled.Text`
  color: #bcbcbc;
  font-size: 16px;
`;

const ClearButton = styled.TouchableOpacity`
  padding: 10px;
`;

const ClearButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;

const StartBtn = styled.TouchableOpacity``;
const StartImg = styled.Image`
  width: 80px;
  height: 80px;
`;

const BlockBtn = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  margin-top: 120px;
  margin-left: 80px;
`;

const PersonBtn = styled.TouchableOpacity``;
const PersonIcon = styled.Image`
  width: 44px;
  height: 44px;
`;

const TextSpeechScreen = () => {
  const [text, setText] = useState("");
  const [textTitle, setTextTitle] = useState("");

  // Function to handle clearing the text input
  const clearText = () => {
    setText("");
    setTextTitle("");
  };
  const navigation = useNavigation();
  return (
    <Container>
      <StyledImageBackground
        source={require("../assets/bgload.png")}
        resizeMode="cover"
      >
        <Header>
          <SettingsButton onPress={() => navigation.goBack()}>
            <Image
              style={{
                width: 24,
                height: 24,
                transform: [{ rotate: "180deg" }],
              }}
              source={require("../assets/back.png")}
            />
          </SettingsButton>
          <HeaderTxt>Text to Speech</HeaderTxt>
        </Header>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          {/* Text Input for Title */}
          <StyledTextInput
            placeholder="Write the Title..."
            placeholderTextColor="#B4B4B4"
            value={textTitle}
            onChangeText={(value) => setTextTitle(value)}
            maxLength={MAX_CHARS}
          />

          {/* Multiline Text Input for Content */}
          <StyledTextArea
            placeholder="Type something here..."
            placeholderTextColor="#B4B4B4"
            multiline
            value={text}
            onChangeText={(value) => setText(value)}
            maxLength={MAX_CHARS}
            style={{ textAlignVertical: "top" }}
          />

          {/* Footer with Clear Button and Character Count */}
          <Footer>
            <ClearButton onPress={clearText}>
              <ClearButtonText>Clear All</ClearButtonText>
            </ClearButton>

            {/* Character Count */}
            <CharCount>
              Chars: {text.length}/{MAX_CHARS}
            </CharCount>
          </Footer>
          <BlockBtn>
            <StartBtn>
              <StartImg source={require("../assets/StartBtn.png")}></StartImg>
            </StartBtn>
            <PersonBtn>
              <PersonIcon
                source={require("../assets/PersonIcon.png")}
              ></PersonIcon>
            </PersonBtn>
          </BlockBtn>
        </View>
      </StyledImageBackground>
    </Container>
  );
};

export default TextSpeechScreen;
