import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function About({ route }) {
  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" | ");

  const description = `${formattedCategories}  🎟️ ~ ${price}💲 ~ ${rating}⭐ ~  👀 (${reviews} +)   `;

  return (
    <View style={tw`bg-white shadow-md pb-3 mb-2 rounded-b-3xl`}>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <View>
    <Image
      source={{ uri: props.image }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
  </View>
);

const RestaurantName = (props) => (
  <Text style={tw`text-3xl font-bold px-1 m-2`}> {props.name} </Text>
);

const RestaurantDescription = (props) => (
  <Text style={tw`text-base text-gray-800  mx-2 px-3 `}>
    {" "}
    {props.description}{" "}
  </Text>
);
