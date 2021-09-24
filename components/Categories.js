import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const items = [
	{
		image: require("../assets/images/shopping-bag.png"),
		text: "Pick-up",
	},
	{
		image: require("../assets/images/soft-drink.png"),
		text: "Soft Drinks",
	},
	{
		image: require("../assets/images/bread.png"),
		text: "Bakery Items",
	},
	{
		image: require("../assets/images/fast-food.png"),
		text: "Fast Foods",
	},
	{
		image: require("../assets/images/deals.png"),
		text: "Deals",
	},
	{
		image: require("../assets/images/coffee.png"),
		text: "Coffee & Tea",
	},
	{
		image: require("../assets/images/desserts.png"),
		text: "Desserts",
	},
];

const Categories = () => {
	return (
		<ScrollView horizontal showsVerticalScrollIndicator={false}>
			<View>
				<Image
					source={items[0].image}
					style={{
						width: 50,
						height: 40,
						resizeMode: "contain",
					}}
				/>
				<Text style={{ fontSize: 13, fontWeight: "bold" }}>Pick-up</Text>
			</View>
		</ScrollView>
	);
};

export default Categories;
