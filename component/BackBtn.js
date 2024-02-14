import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

const BackBtn = () => {
    const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
        </TouchableOpacity>
  )
}
const styles = StyleSheet.create({})
export default BackBtn

