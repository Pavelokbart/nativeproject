

import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
`;


export const StyledImageBackground = styled.ImageBackground`
  flex: 1;
`;


export const StyledTextInput = styled.TextInput`
  width: 320px;
  height: 58px;
  border-width: 1px;
  border-color: #6f6b6b;
  background-color: rgba(147, 144, 144, 0.1);
  border-radius: 20px;
  padding: 10px;
  font-size: 18px;
  margin-top: 40px;
  color: #bcbcbc;
`;


export const StyledTextArea = styled.TextInput`
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


export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 40px;
`;

export const HeaderTxt = styled.Text`
  font-size: 20px;
  line-height: 24px;
  color: white;
  font-weight: 600;
  margin-left: 60px;
`;


export const SettingsButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(10, 9, 9, 0.8);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Footer = styled.View`
  flex-direction: row;
  gap: 170px;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
`;

export const CharCount = styled.Text`
  color: #bcbcbc;
  font-size: 16px;
`;

export const ClearButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const ClearButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;


export const StartBtn = styled.TouchableOpacity``;

export const StartImg = styled.Image`
  width: 80px;
  height: 80px;
`;


export const BlockBtn = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  margin-top: 120px;
  margin-left: 80px;
`;

export const PersonBtn = styled.TouchableOpacity``;

export const PersonIcon = styled.Image`
  width: 44px;
  height: 44px;
`;
