import styled from "styled-components/native";
import {
    View,
    Image,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
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
    },
    circle: {
        position: "absolute",
        borderColor: "#B31EB2",
        borderWidth: 3,
        borderRadius: 100,
        borderWidth: 6,
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
  justify-content: space-between;
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
`;
export const SettingsButton = styled.TouchableOpacity``;

export const WelcomeBanner = styled.View`
  background-color: rgba(147, 144, 144, 0.1);
  border-radius: 16px;
  width: 352px;
  height: 84px;
  padding: 20px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const WelcomeIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const WelcomeTextContainer = styled.View`
  flex-direction: column;
  margin-left: 8px;
`;

export const WelcomeTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const WelcomeSubtitle = styled.Text`
  color: #b4b4b4;
  font-size: 14px;
`;

export const DateText = styled.Text`
  color: #b4b4b4;
  font-size: 12px;
  margin-left: -60px;
  margin-bottom: 10px;
`;
export const AddButton = styled.TouchableOpacity`
position: absolute;
  top:550px;
  align-self: center;

  
`;