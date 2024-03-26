import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react'
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import UseCachedResources from './hooks/UseCachedResources'
import Navigation from './navigation'
import { ContextProvider } from './hooks/provider';
import OnBoard from './screens/Stacks/OnBoard';
import Login from './screens/Stacks/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default App;
