import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={tw`flex-row p-2 px-3 shadow-xl bg-white justify-between bg-white   rounded-t-xl`}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5 name={props.icon} size={22} style={tw`mb-1 self-center`} />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
