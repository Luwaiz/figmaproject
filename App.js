import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import UseCachedResources from './hooks/UseCachedResources'
import Navigation from './navigation'
import { ContextProvider } from './hooks/provider';


const App=()=> {
  const isLoadingComplete=UseCachedResources();
  if(!isLoadingComplete){
    return null;
  }else{
  return(
    <SafeAreaProvider>
    <ContextProvider>
    <Navigation/>
    <StatusBar/>
    </ContextProvider>
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
