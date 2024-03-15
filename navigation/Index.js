import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from '../screens/Stacks/Home.js';
import Next1 from '../screens/Stacks/Next1.js';
import Next2 from '../screens/Stacks/Next2.js';
import Signup from '../screens/Stacks/Signup.js';
import Login from '../screens/Stacks/Login.js';
import LandingPage from '../screens/Tabs/LandingPage.js';
import FoodPage from '../screens/Stacks/FoodPage.js';
import ProductPage from '../screens/Stacks/ProductPage.js';
import CartPage from '../screens/Tabs/CartPage.js';
import Items from '../screens/Stacks/Items.js';
import SearchPage from '../screens/Tabs/SearchPage.js';
import Notification from '../screens/Stacks/Notification.js';
import AdminPage from '../screens/Stacks/AdminPage.js';
import CreateProd from '../screens/Stacks/CreateProd.js';
import UpdateProducts from '../screens/Stacks/UpdateProducts.js';
import SettingsPage from '../screens/Tabs/SettingsPage.js';
import ProfilePage from '../screens/Tabs/ProfilePage.js'


const Stack=createNativeStackNavigator()
const Tab=createBottomTabNavigator()

const Navigation=({loggedIns})=> {
  
  return (
    <NavigationContainer>
      <StackNavigator loggedIns={loggedIns}/>
    </NavigationContainer>
  );
}

function StackNavigator({loggedIns}){
    const[LoggedIn,setLoggedIn]=React.useState(loggedIns)
    return(
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Next1' component={Next1} options={{headerShown:false}}/>
        <Stack.Screen name='Next2' component={Next2} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='HomePage' component={HomePage} options={{headerShown:false}}/>
        <Stack.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
        <Stack.Screen name='AdminPage' component={AdminPage} options={{headerShown:false}}/>
        <Stack.Screen name='CreateProd' component={CreateProd} options={{headerShown:false}}/>
        <Stack.Screen name='ProductPage' component={ProductPage} options={{headerShown:false}}/>
        <Stack.Screen name='UpdateProducts' component={UpdateProducts } options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

function Landing(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='LandingPage' component={LandingPage}/>
      <Stack.Screen name='FoodPage' component={FoodPage} />
      <Stack.Screen name='Items' component={Items} />
      <Stack.Screen name='CartPage' component={CartPage} />

    </Stack.Navigator>
  )
}
function HomePage (){
  
  return(
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:"red",tabBarInactiveTintColor:"green", tabBarShowLabel:false, tabBarStyle:{
      backgroundColor:"#470440",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      height:55
    }}} >
    <Tab.Screen name='ProfilePage' component={ProfilePage} options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <Ionicons name="person-sharp" size={focused?30:22} color="white" />)}}/>
    <Tab.Screen name='SearchPage' component={SearchPage} options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <Fontisto name="search" size={focused?30:22} color="white" />)}}/>
    <Tab.Screen name='Landing' component={Landing} options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <MaterialCommunityIcons name="home-outline" size={focused?45:33} color="white" />)}}/>
    <Tab.Screen name='CartPage' component={CartPage} options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <FontAwesome5 name="shopping-cart" size={focused?29:21} color="white" />)}}/>
    <Tab.Screen name='SettingsPage' component={SettingsPage } options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <Foundation name="list" size={focused?31:23} color="white" />)}}/>
  </Tab.Navigator>
  )

}
export default Navigation;