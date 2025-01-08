import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {

  useFonts({
    'merri':require('./../assets/fonts/MerriweatherSans-Regular.ttf'),
    'merri-medium':require('./../assets/fonts/MerriweatherSans-Medium.ttf'),
    'merri-bold':require('./../assets/fonts/MerriweatherSans-Bold.ttf'),
  })

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  )
}