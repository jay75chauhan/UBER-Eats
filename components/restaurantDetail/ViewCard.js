import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import OrderItems from "./OrderItems";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const addOrderToFirebase = () => {
    setModalVisible(false);
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("OrderCompleted");
        }, 2000);
      });
  };

  const checkoutModalContent = () => {
    return (
      <View
        style={[
          tw`flex-1 justify-end   `,
          { backgroundColor: "rgba(0,0,0,0.7)" },
        ]}
      >
        <View style={tw`bg-white   p-5 shadow-2xl rounded-t-3xl`}>
          <Text style={tw`text-2xl text-center font-bold border-b mb-5`}>
            {restaurantName}
          </Text>

          {items.map((item, index) => (
            <OrderItems key={index} item={item} />
          ))}
          <View
            style={tw`flex-row justify-between mx-2  items-center mt-6 mb-10`}
          >
            <Text style={tw`text-2xl `}>Subtotal</Text>
            <Text
              style={tw`text-xl  font-bold
            `}
            >{`💲${totalUSD}`}</Text>
          </View>

          <View
            style={tw`bg-black py-3  px-6 shadow-2xl mx-auto mb-8 rounded-full items-center `}
          >
            <TouchableOpacity onPress={() => addOrderToFirebase()}>
              <Text style={tw`text-white text-center text-2xl`}>
                Checkout 🛒
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={tw`absolute bg-black  self-center shadow-2xl bottom-80 rounded-full mb-5 z-50 `}
        >
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text
              style={tw`text-white text-xl px-6  py-3 self-center  text-center`}
            >
              {`View Cart  |  💲${totalUSD}`}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={tw`  absolute z-50 shadow-2xl opacity-80  items-center h-full w-full bg-black`}
        >
          <LottieView
            style={tw`h-3/5 self-center mt-28  `}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
