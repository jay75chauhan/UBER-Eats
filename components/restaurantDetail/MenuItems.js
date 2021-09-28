import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItems({
  RestaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: RestaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View
          key={index}
          style={tw` flex-row justify-between mx-3 my-2 p-5 rounded-2xl bg-gray-50 shadow-lg`}
        >
          {hideCheckbox ? (
            <></>
          ) : (
            <BouncyCheckbox
              iconStyle={{ borderColor: "black" }}
              fillColor="black"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
          )}
          <FodInfo food={food} />
          <FoodImage
            image={food.image}
            marginLeft={marginLeft ? marginLeft : 0}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FodInfo = (props) => (
  <View style={tw`justify-evenly w-40`}>
    <Text style={tw`text-lg font-semibold mb-1`}>{props.food.title}</Text>
    <Text style={tw`text-gray-700 mb-1`}>{props.food.description}</Text>
    <Text style={tw`font-semibold`}>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View style={tw``}>
    <Image
      source={{ uri: props.image }}
      style={{
        width: 90,
        height: 90,
        borderRadius: 15,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
