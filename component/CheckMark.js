import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

import React from 'react'

const CheckMark = () => {
  return (
    <View style={styles.check}><Ionicons name="checkmark" size={24} color="#470440" style={{top:-5}} /></View>

  )
}

const styles = StyleSheet.create({
    check:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:"rgba(71,4,64,0.25)",
        marginRight:10
    }
})
export default CheckMark

