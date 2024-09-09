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
import { useNavigation } from "@react-navigation/native";
import {
  styles, 
  Container,
  AccessText,
  PremiumText,
  BlockText,
  ListItems,
  ImgListItems,
  ImgListItem,
  ListItem,
  SwichedBlock,
  SwichedText,
  RadioBlock,
  RadioBlockTxt,
  BlockTxtFirst,
  BlockTxtSecond,
  PriceWeekTxt,
  OfferBlock,
  OfferTxt,
  GradientButton,
  CloseButton,
  CloseBtnImg,
  ButtonText,
  BlockBestValue,
  GreenImg,
  BestValueTxt,
  BottomBlock,
} from "./SubscribeScreenStyles";
import { RadioButton } from "../../components/RadioButton";





export const SubscribeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/subscrbg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <CloseButton>
          <CloseBtnImg source={require("../../assets/close.png")}></CloseBtnImg>
        </CloseButton>

        <Container>
          <BlockText>
            <AccessText>GET FULL ACCESS </AccessText>
            <PremiumText>TO PREMIUM FEATURES</PremiumText>
          </BlockText>
          <ListItems>
            <ImgListItems>
              <ImgListItem
                source={require("../../assets/infinity.png")}
              ></ImgListItem>
              <ListItem>Unlimited Identifications</ListItem>
            </ImgListItems>
            <ImgListItems>
              <ImgListItem
                source={require("../../assets/infinity.png")}
              ></ImgListItem>
              <ListItem>Personal Care Guide</ListItem>
            </ImgListItems>
            <ImgListItems>
              <ImgListItem
                source={require("../../assets/grenIcon.png")}
              ></ImgListItem>
              <ListItem>10,000+ Species of Plants</ListItem>
            </ImgListItems>
            <ImgListItems>
              <ImgListItem
                source={require("../../assets/starIcon.png")}
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
                backgroundActive={"#D41B83"} 
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

          <GradientButton onPress={() => navigation.navigate("Main")}>
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
              source={require("../../assets/bi_shield-fill.png")}
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
