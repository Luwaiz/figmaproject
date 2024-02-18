import { View, Text} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React,{useEffect,useState} from 'react'

export default function UseCachedResources() {
    const[isLoadingComplete,setLoadingComplete]=useState(false);

    useEffect(()=>{
        async function loadingasyncfunction(){
            try{
                SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({
                    ...FontAwesome.font,
                    'Lato':require("../assets/fonts/Lato-Regular.ttf")
                })
            }catch(e){
                console.warn(e)
            }finally{
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }loadingasyncfunction();
    },[])
  return isLoadingComplete;
}
