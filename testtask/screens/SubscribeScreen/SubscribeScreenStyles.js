import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    switchContainer: {
        paddingRight: 20,
    },
    underline: {
        fontSize: 10,
        lineHeight: 14,
        color: "#7a7777",
        textDecorationLine: "underline",
        textDecorationColor: "#fff",
    },
    radioButton: {
        height: 26,
        width: 26,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#FA9AFF",
        alignItems: "center",
        justifyContent: "center",
    },
    radioButtonIcon: {
        height: 18,
        width: 18,
        borderRadius: 18,
        backgroundColor: "transparent",
    },
    radioButtonSelected: {
        backgroundColor: "#D41B83",
    },
});


export const Container = styled.View`
  align-items: center;
  font-size: 36px;
  margin-top: 80px;
`;

export const AccessText = styled.Text`
  font-family: "SF-Pro-Display-Heavy";
  font-size: 36px;
  color: white;
  font-weight: 700;
`;

export const PremiumText = styled.Text`
  font-family: "SF-Pro-Display-Heavy";
  font-size: 32px;
  color: white;
`;

export const BlockText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ListItems = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImgListItems = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;

export const ImgListItem = styled.Image``;

export const ListItem = styled.Text`
  color: white;
  font-size: 14px;
`;

export const SwichedBlock = styled.View`
  display: flex;
  justify-content: space-between;
  width: 345px;
  height: 58px;
  border-radius: 20px;
  margin-top: 23px;
  background-color: rgba(85, 32, 84, 0.8);
  text-align: center;
  flex-direction: row;
  align-items: center;
  border-width: ${(props) => (props.isSelected ? "3px" : "0px")};
  border-color: ${(props) => (props.isSelected ? "#D41B83" : "transparent")};
`;

export const SwichedText = styled.Text`
  color: white;
  padding-left: 24px;
  font-size: 16px;
  line-height: 20px;
  font-family: "SF-Pro-Display-Heavy";
`;

export const RadioBlock = styled.View`
  display: flex;
  width: 345px;
  height: 58px;
  border-radius: 20px;
  background-color: rgba(85, 32, 84, 0.8);
  text-align: center;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
  position: relative;
  border-width: ${(props) => (props.isSelected ? "3px" : "0px")};
  border-color: ${(props) => (props.isSelected ? "#D41B83" : "transparent")};
`;

export const RadioBlockTxt = styled.View`
  display: flex;
  gap: 4px;
  padding-left: 24px;
`;

export const BlockTxtFirst = styled.Text`
  color: white;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const BlockTxtSecond = styled.Text`
  color: white;
  font-size: 13px;
  line-height: 18px;
`;

export const PriceWeekTxt = styled.Text`
  color: white;
  font-size: 13px;
  line-height: 18px;
  margin-left: 62px;
`;

export const OfferBlock = styled.View`
  width: 86px;
  height: 21px;
  border-radius: 20px;
  position: absolute;
  background-color: rgba(143, 12, 141, 0.8);
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  right: 15px;
  top: -10px;
`;

export const OfferTxt = styled.Text`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: white;
`;

export const GradientButton = styled.TouchableOpacity`
  width: 345px;
  height: 58px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 16px;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-left: 24px;
  margin-top: 30px;
`;

export const CloseBtnImg = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const BlockBestValue = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-top: 7px;
`;

export const GreenImg = styled.Image`
  width: 12px;
  height: 12px;
`;

export const BestValueTxt = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: white;
`;

export const BottomBlock = styled.View`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 7px;
`;

export const BottomTxt = styled.Text``;
