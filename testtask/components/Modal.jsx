import React, { useState, useEffect } from "react";
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
  position: relative; /* Чтобы позиционировать крестик */
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
  margin-top: 30px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const CloseIcon = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const SubscriptionModal = ({ visible, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(16 * 60 * 60 + 25 * 60);

  useEffect(() => {
    if (!visible) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timerId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [visible]);

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
      2,
      "0"
    )} : ${String(seconds).padStart(2, "0")}`;
  };

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <ModalOverlay>
        <ModalContent>
          
          <CloseIcon onPress={onClose}>
            <Image
              source={require("../assets/close.png")} 
              style={{ width: 24, height: 24 }}
            />
          </CloseIcon>

          <Icon source={require("../assets/bi_clock-fill.png")} />
          <ModalTitle>Free subscription limit has been reached</ModalTitle>
          <ModalText>You can try in</ModalText>
          <TimerText>{formatTime()}</TimerText>
          <PremiumButton>
            <ButtonText>Get Premium</ButtonText>
          </PremiumButton>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
