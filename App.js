import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import UseCachedResources from './hooks/UseCachedResources'
import Navigation from './navigation/Index.js';

const App=()=> {
  const isLoadingComplete=UseCachedResources();
  const [isLoggedIn,setLoggedIn]=useState(false);
  if(!isLoadingComplete){
    return null;
  }else{
  return(
    <SafeAreaProvider>
    <Navigation loggedIns={isLoggedIn}/>
    <StatusBar/> 
    </SafeAreaProvider>
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
    //justifyContent: 'center',
  }});


export default App;
