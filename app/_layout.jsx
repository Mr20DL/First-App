import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';



export default function RootLayout() {

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY


  useFonts({
    'merri':require('./../assets/fonts/MerriweatherSans-Regular.ttf'),
    'merri-medium':require('./../assets/fonts/MerriweatherSans-Medium.ttf'),
    'merri-bold':require('./../assets/fonts/MerriweatherSans-Bold.ttf'),
  })

  return (
    <ClerkProvider publishableKey={publishableKey}>
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index" 
      options={{
        headerShown:false
      }}/>
      
    </Stack>
    </ClerkProvider>
  );
}