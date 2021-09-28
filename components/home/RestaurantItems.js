import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },

  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

const RestaurantItems = ({ navigation, restaurantData }) => {
  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          activeOpacity={1}
          key={index}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View style={tw`p-2 bg-white mx-3 rounded-2xl my-1 shadow`}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = ({ image }) => (
  <View style={tw`px-1 pt-3`}>
    <Image
      source={{
        uri: image,
      }}
      style={{ width: "100%", height: 180, borderRadius: 15 }}
    />

    <TouchableOpacity style={tw`absolute right-5 top-5`}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = ({ name, rating }) => (
  <View style={tw` flex-row items-center justify-between   p-2`}>
    <View style={tw``}>
      <Text style={tw` font-bold text-xl`}>{name}</Text>
      <Text style={tw`text-base text-gray-500`}>30-40 . min</Text>
    </View>
    <Text
      style={tw`font-bold p-2 px-3 m-2 text-base bg-gray-100 rounded-full `}
    >
      {rating}
    </Text>
  </View>
);

export default RestaurantItems;
