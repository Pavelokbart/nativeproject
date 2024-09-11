import React from "react";
import styled from "styled-components/native";
import { View, Image, Text, TouchableOpacity } from "react-native";

// Стили WelcomeBanner
export const WelcomeBanner = styled.View`
  background-color: rgba(147, 144, 144, 0.1);
  border-radius: 16px;
  width: 352px;
  height: 84px;
  padding: 20px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Разделяет текст и элементы по краям */
`;

export const WelcomeIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const WelcomeTextContainer = styled.View`
  flex-direction: column;
  margin-left: 8px;
  flex: 1; /* Задает элементу, чтобы он занимал всё доступное пространство */
`;

export const WelcomeTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const WelcomeSubtitle = styled.Text`
  color: #b4b4b4;
  font-size: 14px;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const DateText = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-right: 8px; /* Отступ справа от текста */
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

// Основной компонент
const Stories = ({ title, subTitle }) => {
  return (
    <WelcomeBanner>
      <WelcomeIcon source={require("../assets/iconPerson.png")} />
      <WelcomeTextContainer>
        <WelcomeTitle>{truncateTitle(title)}</WelcomeTitle>
        <WelcomeSubtitle>{truncateSubTitle(subTitle)}</WelcomeSubtitle>
      </WelcomeTextContainer>
      <RightContainer>
        <DateText>06.02.2024</DateText>
        <TouchableOpacity style={{ paddingLeft: 8 }}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      </RightContainer>
    </WelcomeBanner>
  );
};

export default Stories;
