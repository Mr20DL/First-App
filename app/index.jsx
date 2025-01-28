import { Text , View, Platform } from "react-native";
import { Link, Redirect, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Index() {

  const{user}=useUser();

  const rootNavigationState=useRootNavigationState()

  useEffect(()=>{
    CheckNavLoaded();
  },[])

  const CheckNavLoaded=()=>{
    if(!rootNavigationState.key)
      return null;
  }
  if (Platform.OS === 'web'){
    // En la web, redirige directamente al home sin login
    return <Redirect href={'/(tabs)/home'} />;
  } else{
    if (user) {
      return <Redirect href={'/(tabs)/home'} />;
    } else {
      return <Redirect href={'/login'} />;
    }
  }
}