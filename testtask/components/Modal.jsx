import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";

const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  width: 295px;

  height: 362px;
  padding: 20px;
  background-color: #242222;
  border-radius: 30px;
  align-items: center;
`;

const Icon = styled.Image`
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
`;

const ModalTitle = styled.Text`
  font-size: 20px;
  color: white;
  width: 203px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const ModalText = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
`;

const TimerText = styled.Text`
  font-size: 24px;
  color: white;
  margin: 20px 0;
  font-weight: bold;
`;

const PremiumButton = styled.TouchableOpacity`
  width: 233px;
  height: 44px;
  background-color: #ff00ff;

  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const CloseButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 8px;
`;

const CloseButtonText = styled.Text`
  color: #888;
  font-size: 16px;
`;

const OpenModalButton = styled.TouchableOpacity`
  background-color: #6200ee;
  padding: 10px 20px;
  border-radius: 8px;
`;

const OpenModalButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
export const SubscriptionModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <ModalOverlay>
        <ModalContent>
          <Icon source={require("../assets/bi_clock-fill.png")} />
          <ModalTitle>Free subscription limit has been reached</ModalTitle>
          <ModalText>You can try in</ModalText>
          <TimerText>16 : 25 : 00</TimerText>
          <PremiumButton>
            <ButtonText>Get Premium</ButtonText>
          </PremiumButton>
          <CloseButton onPress={onClose}>
            <CloseButtonText>Close</CloseButtonText>
          </CloseButton>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
