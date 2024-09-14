import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Image } from "react-native";

const Button = styled.TouchableOpacity`
  background-color: rgba(147, 144, 144, 0.1);

  width: 340px;
  height: 64px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Icon = styled(Image)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Text = styled.Text`
  color: #ffffff;
  flex: 1;
`;

const Arrow = styled(Image)`
  width: 20px;
  height: 20px;
`;

const Tab = ({ text, imgSource }) => {
  return (
    <Button>
      {imgSource && <Icon source={imgSource} />}
      <Text>{text}</Text>
      <Arrow source={require("../assets/back.png")} />
    </Button>
  );
};

export default Tab;
