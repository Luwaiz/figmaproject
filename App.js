import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Home from './screens/Home';
import Next1 from './screens/Next1';
import Next2 from './screens/Next2';
import Signup from './screens/Signup';
const stack=createStackNavigator();

const App=()=> {
  
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home} options={{title:null}}/>
        <stack.Screen name='Next1' component={Next1} options={{title: null}}/>
        <stack.Screen name='Next2' component={Next2} options={{title:null}}/>
       <stack.Screen name='Signup' component={Signup} options={{title:null}}/>
        </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
    //justifyContent: 'center',
  }});


export default App;
