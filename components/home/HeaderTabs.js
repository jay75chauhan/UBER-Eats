import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <View style={tw`flex-row justify-center p-2 `}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={[
      tw`m-1 shadow-xl `,
      {
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
      },
    ]}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 16,
        fontWeight: "bold",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
