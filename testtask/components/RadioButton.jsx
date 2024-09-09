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

export const RadioButton = ({ selected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={stylesrbd.radioButton}>
    <View
      style={[
        stylesrbd.radioButtonIcon,
        selected && stylesrbd.radioButtonSelected,
      ]}
    />
  </TouchableOpacity>
);
