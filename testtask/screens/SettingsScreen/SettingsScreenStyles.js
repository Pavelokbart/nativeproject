

import { StyleSheet } from "react-native";
import styled from "styled-components/native";


export const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});


export const Container = styled.View`
  width: 340px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
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
  font-size: 24px;
  line-height: 40px;
  color: white;
  font-weight: 600;
  margin-left: 80px;
`;

export const SettingsButton = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  background-color: rgba(10, 9, 9, 0.8);
  border-radius: 30px;
`;

export const SettingsPanel = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;
