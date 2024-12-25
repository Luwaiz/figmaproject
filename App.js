import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UseCachedResources from "./hooks/UseCachedResources";
import { ContextProvider } from "./hooks/provider";
import Biometrics from "./testrun/Biometrics";

const App = () => {
	const isLoadingComplete = UseCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<ContextProvider>
					<Biometrics />
					<StatusBar />
				</ContextProvider>
			</SafeAreaProvider>
		);
	}
};

export default App;
