import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackBtn from '../../component/BackBtn'
import { contexter } from '../../hooks/provider'

const SettingsPage = () => {
  const context=contexter()
   const LogOut=()=>{
    context.setLoggedIn(false)
   }
  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
    <BackBtn/>
    </View>
     <Text onPress={LogOut}>Log Out</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center"
    },
    topContainer: {
      marginTop: 30,
      height: 50,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 6,
      alignItems: "center",
    },

})
export default SettingsPage

