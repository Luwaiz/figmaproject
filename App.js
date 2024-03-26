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
  const [loading,setLoading]=useState(true)
  const [onBoarding,setOnBoarding]=useState(false)

  const GetItem = async()=>{
    try{
       const value= await AsyncStorage.getItem("key")
       if(value !==null){
        setOnBoarding(true)
       }
    }
    catch(e){
        console.log(e)
    }
    finally{
      setLoading(false)
    }
}
 useEffect(()=>{
    GetItem()
 },[])

  if(!isLoadingComplete){
    return null;
  }else{
  return(
    <SafeAreaProvider>
    <ContextProvider>
    {loading? null:onBoarding?<Navigation/>:<OnBoard/>}
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
