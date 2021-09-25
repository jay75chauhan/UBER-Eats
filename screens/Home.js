import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import tw from "tailwind-react-native-classnames";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-gray-200 h-full`}>
      <View style={tw`bg-white pt-6`}>
        <HeaderTabs />
        <SearchBar />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
