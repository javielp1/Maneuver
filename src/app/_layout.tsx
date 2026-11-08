import {Stack} from 'expo-router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GuestProvider} from '@/context/GuestContext';
import {palette} from '@/components/ui';
export default function RootLayout(){
 return <SafeAreaProvider><GuestProvider><Stack screenOptions={{headerStyle:{backgroundColor:palette.background},headerTintColor:palette.ink}}>
  <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
  <Stack.Screen name="trainer/[id]" options={{title:'Trainer Profile'}}/>
  <Stack.Screen name="event/[id]" options={{title:'Event Details'}}/>
  <Stack.Screen name="group/[id]" options={{title:'Private Group'}}/>
  <Stack.Screen name="signup" options={{title:'Create Account'}}/>
 </Stack></GuestProvider></SafeAreaProvider>
}
