import { Platform } from 'react-native';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut } from '@clerk/clerk-expo';

const tokenCache = {
  async getToken(key){
    try{
      const item = await SecureStore.getItemAsync(key)
      if(item){
        console.log('${key} was used \n')
      } else{
        console.log('No values stored under key: ' + key)
      }
      return item;
    } catch (error){
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null;
    }
  },
  async saveToken(key, value){
    try{
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error('SecureStore save item error: ', err);
      return;
    }
  },
};

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  useFonts({
    'merri':require('./../assets/fonts/MerriweatherSans-Regular.ttf'),
    'merri-medium':require('./../assets/fonts/MerriweatherSans-Medium.ttf'),
    'merri-bold':require('./../assets/fonts/MerriweatherSans-Bold.ttf'),
  })

  return (
    <ClerkProvider
    tokenCache={tokenCache}
    publishableKey={publishableKey}>
    <Stack
      screenOptions={{
        headerShown: false, 
    }}>
      {Platform.OS === 'web' ? (
          // Renderiza el contenido principal sin login en web
          <>
          <Stack.Screen name="(tabs)" />
          </>
      ) : (
        // Renderiza el login en móvil
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="login/index" />
        </>
      )}
    </Stack>
    </ClerkProvider>
  );
}