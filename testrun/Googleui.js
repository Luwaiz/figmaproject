import { StyleSheet, Text, View } from "react-native";


import React from "react";
import Google from "../component/Google";

const GoogleUI = () => {
	return (
		<View>
			<Text>googleui</Text>
			<Google/>
		</View>
	);
};

export default GoogleUI;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
