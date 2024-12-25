import { StyleSheet, Text, View,Button } from 'react-native'
import * as LocalAuthentication from "expo-local-authentication";

import React, { useEffect, useState } from 'react'

const Biometrics = () => {
    const [isBiometrics, setBiometrics] = useState(false);

	useEffect(() => {
		(async () => {
			const compatibility = await LocalAuthentication.hasHardwareAsync();
			setBiometrics(compatibility);
		})();
	}, []);
	const handleBiometrics = async () => {
		const biometricAvailable = await LocalAuthentication.hasHardwareAsync();
		if (!biometricAvailable) {
			alert("Biometrics not available");
			return;
		}
		let supportedBiometrics;
		if (biometricAvailable) {
			supportedBiometrics =
				await LocalAuthentication.supportedAuthenticationTypesAsync();
		}
		const fingerprint = await LocalAuthentication.isEnrolledAsync();
		if (!fingerprint) {
			alert("No fingerprint enrolled.");
			return;
		}
		const bioAvailable = await LocalAuthentication.authenticateAsync({
			promptMessage: "Authenticate your account",
			cancelLabel: "cancel",
			disableDeviceFallback: true,
		});
		if (bioAvailable.success) {
			alert("Authentication complete.");
			console.log(isBiometrics);
		} else if (
			bioAvailable.error === "user_cancel" ||
			bioAvailable.error === "user_fallback"
		) {
			alert("Authentication canceled.");
		} else {
			alert("Authentication failed. Please try again.");
		}
	};
  return (
    <View style={styles.container}>
                          <Text>
                            {isBiometrics ? "Biometrics enabled" : "Biometrics disabled"}
                        </Text>
                        <Button title="Toggle Biometrics" onPress={handleBiometrics} />
    </View>
  )
}

export default Biometrics

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})