import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={tw`p-2 bg-white mx-3 rounded-xl my-1 shadow`}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = () => (
  <View style={tw`p-1`}>
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      }}
      style={{ width: "100%", height: 180, borderRadius: 15 }}
    />

    <TouchableOpacity style={tw`absolute right-5 top-5`}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = () => (
  <View style={tw` flex-row items-center justify-between mt-2 p-1 px-2`}>
    <View style={tw``}>
      <Text style={tw` font-semibold text-xl`}>
        what a fabluhfueh oihef89ejhf
      </Text>
      <Text style={tw`text-base text-gray-800`}>30-40 . min</Text>
    </View>

    <Text style={tw`font-bold p-2 text-base bg-gray-100 rounded-full `}>
      4.5
    </Text>
  </View>
);

export default RestaurantItem;
