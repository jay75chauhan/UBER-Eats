import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GOOGLE_MAP_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
const SearchBar = ({ cityHandlear }) => {
  return (
    <View style={tw`m-3 flex-row  `}>
      <GooglePlacesAutocomplete
        onFail={(error) => console.error(error)}
        placeholder="Search"
        debounce={400}
        minLength={2}
        fetchDetails={true}
        enablePoweredByContainer={false}
        query={{
          key: GOOGLE_MAP_KEY,
          language: "en",
        }}
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          cityHandlear(city);
        }}
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
            marginBottom: 8,
          },
          row: {
            backgroundColor: "#EEEEEE",
            padding: 10,
            margin: 5,
            borderRadius: 15,

            flexDirection: "row",
          },
          separator: {
            backgroundColor: "#FFFF",
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
      />
    </View>
  );
};

export default SearchBar;
