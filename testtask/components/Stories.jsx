import React from "react";
import styled from "styled-components/native";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { format } from "date-fns";

const WelcomeBanner = styled.View`
  background-color: rgba(147, 144, 144, 0.1);
  border-radius: 16px;
  width: 340px;
  height: 84px;
  padding: 20px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const WelcomeIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const WelcomeTextContainer = styled.View`
  flex-direction: column;
  margin-left: 8px;
  flex: 1;
`;

const WelcomeTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const WelcomeSubtitle = styled.Text`
  color: #b4b4b4;
  font-size: 14px;
`;

const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const DateText = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-right: 8px;
`;

const truncateSubTitle = (str) => {
  if (str.length >= 18) {
    return str.substring(0, 18) + "...";
  }
  return str;
};
const truncateTitle = (str) => {
  if (str.length >= 10) {
    return str.substring(0, 10);
  }
  return str;
};

const Stories = ({ title, subTitle, onPress, generationDate }) => {
  const formattedDate = format(new Date(generationDate), "dd.MM.yyyy");
  return (
    <TouchableOpacity onPress={onPress}>
      <WelcomeBanner>
        <WelcomeIcon source={require("../assets/iconPerson.png")} />
        <WelcomeTextContainer>
          <WelcomeTitle>{truncateTitle(title)}</WelcomeTitle>
          <WelcomeSubtitle>{truncateSubTitle(subTitle)}</WelcomeSubtitle>
        </WelcomeTextContainer>
        <RightContainer>
          <DateText>{formattedDate}</DateText>
          <TouchableOpacity style={{ paddingLeft: 8 }}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/back.png")}
            />
          </TouchableOpacity>
        </RightContainer>
      </WelcomeBanner>
    </TouchableOpacity>
  );
};

export default Stories;
