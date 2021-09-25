import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
const SearchBar = () => {
  return (
    <View style={tw`m-3 flex-row  `}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "500",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={tw`ml-4`}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={tw`flex-row bg-white mr-3 p-2  shadow rounded-full items-center`}
          >
            <AntDesign name="clockcircle" size={17} style={tw`mr-2`} />
            <Text>Search</Text>
          </View>
        )}
        // query={{
        // 	key: "YOUR API KEY",
        // 	language: "en",
        // }}
      />
    </View>
  );
};

export default SearchBar;
