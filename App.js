import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View,TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import UseCachedResources from './hooks/UseCachedResources'
import Navigation from './navigation/Index.js';
import Context from './hooks/provider.js';

const App=()=> {
  const isLoadingComplete=UseCachedResources();
  const [isLoggedIn,setLoggedIn]=useState(false);
  const [token,setToken]=useState("")
  const userContext={
    token,
    setToken
  }
  if(!isLoadingComplete){
    return null;
  }else{
  return(
    <SafeAreaProvider>
    <Context.Provider value={userContext}>
    <Navigation loggedIns={isLoggedIn}/>
    <StatusBar/> 
    </Context.Provider>
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
