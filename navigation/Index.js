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
import { contexter } from '../hooks/provider.js';
import OnBoard from '../screens/Stacks/OnBoard.js';


const Stack=createNativeStackNavigator()
const Tab=createBottomTabNavigator()
const Navigation=()=> {
  const context = contexter()

  return (
    <NavigationContainer>
    {context?.loggedIn===false? (<LoggedOutScreen/>):(<LoggedInScreen/>)}
    </NavigationContainer>
  );
}

function LoggedOutScreen(){

    return(
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
      <Stack.Screen name='OnBoard' component={OnBoard}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
    )
   
}

function LoggedInScreen(){
  return(
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}
function HomePage (){
  
  return(
    <Tab.Navigator initialRouteName='Landing' screenOptions={{tabBarActiveTintColor:"red",tabBarInactiveTintColor:"green", tabBarShowLabel:false, tabBarStyle:{
      backgroundColor:"#470440",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      height:55,
      
    }}} >
    <Tab.Screen name='ProfilePage' component={ProfilePage} options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <View style={[focused? styles.activeIndicator : styles.inActiveIndicator]}>
          <Ionicons name="person-sharp" size={22} color={focused?"#470440":"white"} />
        </View>
        )}}/>
    <Tab.Screen name='SearchPage' component={SearchPage} options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <View style={[focused? styles.activeIndicator : styles.inActiveIndicator]}>
          <Fontisto name="search" size={22} color={focused?"#470440":"white"} />
        </View>
        )}}/>
    <Tab.Screen name='Landing' component={Landing} options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <View style={[focused? styles.activeIndicator : styles.inActiveIndicator]}>
          <MaterialCommunityIcons name="home-outline" size={33} color={focused?"#470440":"white"} />
        </View>
        )}}/>
    <Tab.Screen name='CartPage' component={CartPage} options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <View style={[focused? styles.activeIndicator : styles.inActiveIndicator]}>
          <FontAwesome5 name="shopping-cart" size={21} color={focused?"#470440":"white"} />
        </View>
        )}}/>
    <Tab.Screen name='SettingsPage' component={SettingsPage } options={{headerShown:false,
      tabBarIcon:({focused})=>(
        <View style={[focused? styles.activeIndicator : styles.inActiveIndicator]}>
          <Foundation name="list" size={23} color={focused?"#470440":"white"} />
        </View>
        )}}/>
  </Tab.Navigator>
  )

}

const styles=StyleSheet.create({
  activeIndicator:{
    height:40,
    width:40,
    backgroundColor:"white",
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
  },
  inActiveIndicator:{
    height:40,
    width:40,
    backgroundColor:"#470440",
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
  }
})
export default Navigation;