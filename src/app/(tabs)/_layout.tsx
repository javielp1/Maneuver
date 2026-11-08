import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import {palette} from '@/components/ui';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export default function TabLayout(){const insets=useSafeAreaInsets();return <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:palette.accent,tabBarInactiveTintColor:palette.muted,tabBarStyle:{height:68,paddingTop:8,paddingBottom:12},sceneStyle:{backgroundColor:palette.background,paddingTop:insets.top}}}>
 <Tabs.Screen name="index" options={{title:'Home',tabBarIcon:({color,size})=><Ionicons name="home-outline" size={size} color={color}/>}}/>
 <Tabs.Screen name="trainers" options={{title:'Trainers',tabBarIcon:({color,size})=><Ionicons name="people-outline" size={size} color={color}/>}}/>
 <Tabs.Screen name="booking" options={{title:'Booking',tabBarIcon:({color,size})=><Ionicons name="calendar-outline" size={size} color={color}/>}}/>
 <Tabs.Screen name="events" options={{title:'Events',tabBarIcon:({color,size})=><Ionicons name="ticket-outline" size={size} color={color}/>}}/>
 </Tabs>}
