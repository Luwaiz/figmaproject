import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home.js';
import Next1 from '../screens/Next1';
import Next2 from '../screens/Next2';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import LandingPage from '../screens/LandingPage';

const Stack=createNativeStackNavigator()

const Navigation=({loggedIns})=> {
  
  return (
    <NavigationContainer>
      <RootNavigator loggedIns={loggedIns}/>
    </NavigationContainer>
  );
}

function RootNavigator({loggedIns}){
    const[LoggedIn,setLoggedIn]=React.useState(loggedIns)
    return(
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Next1' component={Next1} options={{headerShown:false}}/>
        <Stack.Screen name='Next2' component={Next2} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='LandingPage' component={LandingPage} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default Navigation;