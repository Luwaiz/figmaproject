import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home.js';
import Next1 from '../screens/Next1.js';
import Next2 from '../screens/Next2.js';
import Signup from '../screens/Signup.js';
import Login from '../screens/Login.js';
import LandingPage from '../screens/LandingPage.js';
import FoodPage from '../screens/FoodPage.js';
import ProfilePage from '../screens/ProfilePage.js';
import CartPage from '../screens/CartPage.js';
import Items from '../screens/Items.js';
import SearchPage from '../screens/SearchPage.js';
import Notification from '../screens/Notification.js';
import AdminPage from '../screens/AdminPage.js';
import CreateProd from '../screens/CreateProd.js';
import ProductPage from '../screens/ProductPage.js';
import UpdateProducts from '../screens/UpdateProducts.js';
import SettingsPage from '../screens/SettingsPage.js';


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
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Next1' component={Next1} options={{headerShown:false}}/>
        <Stack.Screen name='Next2' component={Next2} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='LandingPage' component={LandingPage} options={{headerShown:false}}/>
        <Stack.Screen name='FoodPage' component={FoodPage} options={{headerShown:false}}/>
        <Stack.Screen name='ProfilePage' component={ProfilePage} options={{headerShown:false}}/>
        <Stack.Screen name='CartPage' component={CartPage} options={{headerShown:false}}/>
        <Stack.Screen name='Items' component={Items} options={{headerShown:false}}/>
        <Stack.Screen name='SearchPage' component={SearchPage} options={{headerShown:false}}/>
        <Stack.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
        <Stack.Screen name='AdminPage' component={AdminPage} options={{headerShown:false}}/>
        <Stack.Screen name='CreateProd' component={CreateProd} options={{headerShown:false}}/>
        <Stack.Screen name='ProductPage' component={ProductPage} options={{headerShown:false}}/>
        <Stack.Screen name='UpdateProducts' component={UpdateProducts } options={{headerShown:false}}/>
        <Stack.Screen name='SettingsPage' component={SettingsPage } options={{headerShown:false}}/>

        </Stack.Navigator>
    )
}
export default Navigation;