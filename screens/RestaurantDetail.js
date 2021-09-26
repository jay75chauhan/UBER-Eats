import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCard from "../components/restaurantDetail/ViewCard";

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      {/* <Divider
        width={1.5}
        style={{ padding: 8, backgroundColor: "#fff", marginBottom: 10 }}
      /> */}

      <MenuItems />
      <ViewCard navigation={navigation} RestaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;
