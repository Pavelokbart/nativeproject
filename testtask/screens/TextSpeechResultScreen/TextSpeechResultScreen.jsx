import React from "react";
import { View, Image, ImageBackground, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
`;

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
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

const StyledTextInput = styled.View`
  width: 320px;
  height: 58px;
  border-width: 1px;
  border-color: #6f6b6b;
  background-color: rgba(147, 144, 144, 0.1);
  border-radius: 20px;
  padding: 10px;
  font-size: 18px;
  margin-top: 20px;
  color: #bcbcbc;
  justify-content: center;
`;

const StyledTextArea = styled.View`
  width: 320px;
  height: 202px;
  border-width: 1px;
  border-color: #6f6b6b;
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
  margin-top: 20px;
  background-color: rgba(82, 78, 78, 0.1);
  color: #bcbcbc;
`;

const TitleTxt = styled.Text`
  color: white;
  font-size: 20px;
  line-height: 24px;
`;

const MainTxt = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 24px;
`;

const PersonIcon = styled.Image`
  width: 145px;
  height: 145px;
  margin-top: 20px;
`;

const MediaIcon = styled.Image`
  width: 301px;
  height: 18px;
  margin-top: 20px;
`;

const BlockButtons = styled.View`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  margin-top: 20px;
`;

const RepostBtn = styled.TouchableOpacity``;
const RepostIcon = styled.Image`
  width: 44px;
  height: 44px;
`;

const PlayBtn = styled.TouchableOpacity``;
const PlayIcon = styled.Image`
  width: 80px;
  height: 80px;
`;

const TextSpeechResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { story } = route.params;

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
          <StyledTextInput>
            <TitleTxt>{story.title}</TitleTxt>
          </StyledTextInput>
          <StyledTextArea>
            <MainTxt>{story.text}</MainTxt>
          </StyledTextArea>

          <PersonIcon
            source={require("../../assets/PersonIcon.png")}
          ></PersonIcon>
          <MediaIcon source={require("../../assets/media.png")}></MediaIcon>
          <BlockButtons>
            <RepostBtn>
              <RepostIcon
                source={require("../../assets/repost.png")}
              ></RepostIcon>
            </RepostBtn>
            <PlayBtn>
              <PlayIcon source={require("../../assets/play.png")}></PlayIcon>
            </PlayBtn>

            <RepostBtn>
              <RepostIcon
                source={require("../../assets/repost.png")}
              ></RepostIcon>
            </RepostBtn>
          </BlockButtons>
        </View>
      </StyledImageBackground>
    </Container>
  );
};

export default TextSpeechResultScreen;
