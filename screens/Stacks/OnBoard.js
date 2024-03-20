import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import slides from '../../component/slides'
import Buttons from '../../component/Buttons'
const {width,height}=Dimensions.get("screen")

const OnBoard = ({navigation}) => {
  const [currentId,setCurrentId]=useState(0)
  const ItemViewed = useRef(({ViewedItem})=>{
      setCurrentId(ViewedItem[0].index)
      console.log(currentId)
  }).current
  const handleNavigation=()=>{
      navigation.navigate("Signup")
  }
  return (
    <View style={styles.container}>
      <FlatList
        ItemViewed={ItemViewed}
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        renderItem={({item})=>{
          return(
            <View key={item.id} style={styles.page}>
              <View style={styles.imagery}></View>
              <View style={styles.texts}>
              <Text style={styles.head}>{item.heading}</Text>
              <Text style={styles.subHead}>{item.subHeading}</Text>
              </View>
              <Buttons width={300} Btn={"Next"}  onPress={item.id===3? handleNavigation:null}/>
            </View>
          )
        }}
      />
    </View>
  )
}

export default OnBoard

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  },
  page:{
    backgroundColor:"white",
    flex:1,
    width:width,
    height:height,
    justifyContent:'center',
    alignItems:"center"
  },
  imagery:{
    flex:0.66,
    justifyContent:"center",
    alignItems:"center",
  },
  texts:{
    flex:0.3,
    alignItems:"center"
  },
  head:{
    fontSize:26,
    fontWeight:"800",
    color:"#470440",
  },
  subHead:{
    width:width-50,
    fontSize:14,
    fontWeight:"400",
    color:"black",
    marginTop:40,
    textAlign:"center",
  }
})