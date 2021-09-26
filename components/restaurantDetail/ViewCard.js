import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function ViewCard({ navigation, RestaurantName }) {
  return (
    <View
      style={tw`absolute bg-black w-1/2 self-center shadow-2xl bottom-80 rounded-full   mb-5   z-50 `}
    >
      <Text
        onPress={() => console.log("dfwdfedfw")}
        style={tw`text-white text-xl px-5  py-3 self-center `}
      >
        View card
      </Text>
    </View>
  );
}
