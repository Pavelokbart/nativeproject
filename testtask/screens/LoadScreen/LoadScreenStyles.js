import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import styled from "styled-components/native";
export const ImageScreen = styled.Image`
  margin-top: 70px;
  width: 160px;
  height: 160px;
`;

export const TextSpeech = styled.Text`
  font-size: 36px;
  line-height: 40px;
  color: white;
  text-align: center;
  margin-top: 40px;
  font-weight: 700;
  font-family: "SF-Pro-Display-Heavy";
`;

export const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    square: {
        position: "absolute",
        borderColor: "#B31EB2",
        borderWidth: 15,
        borderRadius: 70,
        width: 250,
        height: 250,
    },
});