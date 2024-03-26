import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import slides from '../../component/slides'
import Buttons from '../../component/Buttons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
const {width,height}=Dimensions.get("screen")


const OnBoard = () => {
  const [currentId,setCurrentId]=useState(0)
  const updateIndex=(e)=>{
    //console.log(e)
    const offsetX= e.nativeEvent.contentOffset.x
    console.log(offsetX)
    const currentIndex= Math.round(offsetX/width)
    console.log(currentIndex)
    setCurrentId(currentIndex)
  }
  const Footing=()=>{
    
    
    return(
      <View style={styles.footing}>
        <View style={{alignItems:"center",flexDirection:"row", marginBottom:20}}>
      {slides.map((_,index)=>(
          <View style={[styles.indicator,currentId===index && {backgroundColor:"#470440",width:25}]} key={index}/>
      ))}
      </View>
  
        
        <Buttons width={300} Btn={"Next"}/>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
      onMomentumScrollEnd={updateIndex}
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
              <Footing/>
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
    width:width,
    height:height,
    justifyContent:'center',
    alignItems:"center"
  },
  imagery:{
    height:height*0.67,
    justifyContent:"center",
    alignItems:"center",
  },
  texts:{
    height:height*0.13,
    alignItems:"center",
   
    justifyContent:"center"
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
  },
  indicator:{
    backgroundColor:"#635D5D",
    height:7,
    width:7,
    marginHorizontal:3,
    borderRadius:10
  },
  footing:{
    alignItems:"center",
    justifyContent:"center",
    height:height*0.2,
    width:width,
    
  }
})