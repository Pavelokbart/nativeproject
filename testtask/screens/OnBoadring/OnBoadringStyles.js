
import {
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";



export const TextWelcome = styled.Text`
  font-size: 36px;
  line-height: 40px;
  color: #ff40a7;
  text-align: center;
  font-weight: 700;
  font-family: "SF-Pro-Display-Heavy";
  margin-bottom: 8px;
`;

export const TextSpeach = styled.Text`
  font-size: 30px;
  line-height: 34px;
  color: white;
  text-align: center;
  font-weight: 700;
  font-family: "SF-Pro-Display-Heavy";
  margin-bottom: 50px;
`;

export const GradientButton = styled.TouchableOpacity`
  width: 300px;
  height: 56px;
  border-radius: 20px;
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const IndicatorDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #d1a0c7;
  margin: 0 5px;
`;

export const ActiveDot = styled(IndicatorDot)`
  background-color: #ff40a7;
`;

export const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 21,
    },
});