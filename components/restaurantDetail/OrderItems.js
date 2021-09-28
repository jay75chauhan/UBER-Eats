import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
export default function OrderItems({ item }) {
  const { title, price } = item;
  return (
    <View
      style={tw`flex-row justify-between p-2 px-4 items-center bg-gray-200  my-2 rounded-full`}
    >
      <Text style={tw`text-xl font-semibold`}>{title}</Text>
      <Text style={tw`text-sm text-gray-800`}>{price}</Text>
    </View>
  );
}
