import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";

const Home = () => {
	return (
		<SafeAreaView style ={{ backgroundColor: "#eee" }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTabs />
			</View>
		</SafeAreaView>
	);
};

export default Home;
