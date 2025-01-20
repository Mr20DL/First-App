import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'

export default function LoginScreen() {
  return (
    <View>
      <Image source={require('./../../assets/images/wallpaper-preview.jpg')}
        style={{
          width:'100%',
          height:520
        }}
      />
      <View style={{
        padding:20,
        display:'flex',
        alignItems:'center'
      }}>
        <Text style={{
          fontFamily:'merri-bold',
          fontSize:30,
          textAlign:'center'
        }}>Ready to start a new adventure?</Text>
        <Text style={{
          fontFamily:'merri',
          fontSize:18,
          textAlign:'center',
          color:Colors.GRAY
        }}>Let's discover new pokemon challenges</Text>
        <Pressable
        style={{
          padding:14,
          marginTop:100,
          backgroundColor:Colors.PRIMARY,
          width:'100%',
          borderRadius:14
        }}>
          <Text>Get Started</Text>
        </Pressable>
      </View>
    </View>
  )
}