import React, { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Switch } from "react-native-switch";

const styles = StyleSheet.create({
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
});

const Container = styled.View`
  align-items: center;
  font-size: 36px;
  margin-top: 80px;
`;

const AccessText = styled.Text`
  font-family: "SF-Pro-Display-Heavy";
  font-size: 36px;
  color: white;
  font-weight: 700;
`;

const PremiumText = styled.Text`
  font-family: "SF-Pro-Display-Heavy";
  font-size: 32px;
  color: white;
`;

const BlockText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ListItems = styled.View`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ImgListItems = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;

const ImgListItem = styled.Image``;

const ListItem = styled.Text`
  color: white;
  font-size: 14px;
`;

const SwichedBlock = styled.View`
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

const SwichedText = styled.Text`
  color: white;
  padding-left: 24px;
  font-size: 16px;
  line-height: 20px;
  font-family: "SF-Pro-Display-Heavy";
`;

const RadioBlock = styled.View`
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

const RadioBlockTxt = styled.View`
  display: flex;
  gap: 4px;
  padding-left: 24px;
`;

const BlockTxtFirst = styled.Text`
  color: white;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
`;

const BlockTxtSecond = styled.Text`
  color: white;
  font-size: 13px;
  line-height: 18px;
`;

const PriceWeekTxt = styled.Text`
  color: white;
  font-size: 13px;
  line-height: 18px;
  margin-left: 62px;
`;

const OfferBlock = styled.View`
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

const OfferTxt = styled.Text`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: white;
`;

const RadioButton = ({ selected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={stylesrbd.radioButton}>
    <View
      style={[
        stylesrbd.radioButtonIcon,
        selected && stylesrbd.radioButtonSelected,
      ]}
    />
  </TouchableOpacity>
);

const stylesrbd = StyleSheet.create({
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

const GradientButton = styled.TouchableOpacity`
  width: 345px;
  height: 58px;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 16px;
`;

const CloseButton = styled.TouchableOpacity`
  margin-left: 24px;
  margin-top: 30px;
`;

const CloseBtnImg = styled.Image`
  width: 30px;
  height: 30px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const BlockBestValue = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-top: 7px;
`;

const GreenImg = styled.Image`
  width: 12px;
  height: 12px;
`;

const BestValueTxt = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: white;
`;

const BottomBlock = styled.View`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 7px;
`;

const BottomTxt = styled.Text``;

export const SubscribeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null); // Состояние для отслеживания выбранного блока

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/subscrbg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <CloseButton>
          <CloseBtnImg source={require("../assets/close.png")}></CloseBtnImg>
        </CloseButton>

        <Container>
          <BlockText>
            <AccessText>GET FULL ACCESS </AccessText>
            <PremiumText>TO PREMIUM FEATURES</PremiumText>
          </BlockText>
          <ListItems>
            <ImgListItems>
              <ImgListItem
                source={require("../assets/infinity.png")}
              ></ImgListItem>
              <ListItem>Unlimited Identifications</ListItem>
            </ImgListItems>
            <ImgListItems>
              <ImgListItem
                source={require("../assets/infinity.png")}
              ></ImgListItem>
              <ListItem>Personal Care Guide</ListItem>
            </ImgListItems>
            <ImgListItems>
              <ImgListItem
                source={require("../assets/grenIcon.png")}
              ></ImgListItem>
              <ListItem>10,000+ Species of Plants</ListItem>
            </ImgListItems>
            <ImgListItems>
              <ImgListItem
                source={require("../assets/starIcon.png")}
              ></ImgListItem>
              <ListItem>Limitless Full Versions</ListItem>
            </ImgListItems>
          </ListItems>
          <StatusBar style="auto" />

          <SwichedBlock isSelected={selectedBlock === "freeTrial"}>
            <SwichedText>Enable free trial</SwichedText>
            <View style={styles.switchContainer}>
              <Switch
                value={isEnabled}
                onValueChange={(val) => setIsEnabled(val)}
                disabled={false}
                circleSize={30}
                barHeight={30}
                backgroundActive={"#D41B83"} // Розовый фон активного состояния
                backgroundInactive={"gray"}
                circleActiveColor={"#e9e4e4"}
                circleInActiveColor={"#eae7e7"}
                switchWidthMultiplier={2}
                switchBorderRadius={30}
                renderActiveText={false}
                renderInActiveText={false}
              />
            </View>
          </SwichedBlock>

          <RadioBlock isSelected={selectedBlock === "yearly"}>
            <RadioBlockTxt>
              <BlockTxtFirst>Yearly Access</BlockTxtFirst>
              <BlockTxtSecond>59,99 $/year</BlockTxtSecond>
            </RadioBlockTxt>
            <PriceWeekTxt>just 1,15 $/week</PriceWeekTxt>
            <OfferBlock>
              <OfferTxt>BEST OFFER</OfferTxt>
            </OfferBlock>
            <View style={{ paddingLeft: 14 }}>
              <RadioButton
                selected={selectedBlock === "yearly"}
                onPress={() => setSelectedBlock("yearly")}
              />
            </View>
          </RadioBlock>

          <SwichedBlock isSelected={selectedBlock === "weekly"}>
            <RadioBlockTxt>
              <BlockTxtFirst>Weekly Access</BlockTxtFirst>
              <BlockTxtSecond>6,99 $/week</BlockTxtSecond>
            </RadioBlockTxt>
            <View style={{ paddingRight: 20 }}>
              <RadioButton
                selected={selectedBlock === "weekly"}
                onPress={() => setSelectedBlock("weekly")}
              />
            </View>
          </SwichedBlock>

          <GradientButton>
            <LinearGradient
              colors={["#8F21E4", "#DC1A77", "#EA1D7F"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <ButtonText>Continue</ButtonText>
            </LinearGradient>
          </GradientButton>

          <BlockBestValue>
            <GreenImg
              source={require("../assets/bi_shield-fill.png")}
            ></GreenImg>
            <BestValueTxt>Best value</BestValueTxt>
          </BlockBestValue>

          <BottomBlock>
            <Text style={styles.underline}>Terms of Use</Text>
            <Text style={styles.underline}>Privacy Policy</Text>
            <Text style={styles.underline}>Restore</Text>
          </BottomBlock>
        </Container>
      </ImageBackground>
    </View>
  );
};
