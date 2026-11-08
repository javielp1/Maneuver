import {createContext,useContext,useState,type ReactNode} from 'react';
import {Modal,Pressable,Text,View} from 'react-native';
import {Action,Card,palette,styles} from '@/components/ui';
import {router} from 'expo-router';

type Gate={requireAccount:()=>void;notice:boolean;dismissNotice:()=>void};
const Context=createContext<Gate>({requireAccount:()=>{},notice:false,dismissNotice:()=>{}});
export const useGuest=()=>useContext(Context);
export function GuestProvider({children}:{children:ReactNode}){
 const [show,setShow]=useState(false);
 const [seen,setSeen]=useState(false);
 const [notice,setNotice]=useState(false);
 function requireAccount(){if(seen){setNotice(true)} else {setShow(true);setSeen(true)}}
 function dismissNotice(){setNotice(false)}
 return <Context.Provider value={{requireAccount,notice,dismissNotice}}>
  {children}
  {notice?<Pressable onPress={dismissNotice} style={{position:'absolute',bottom:85,left:20,right:20,zIndex:2,backgroundColor:'#e5f3f0',padding:14,borderRadius:10,borderWidth:1,borderColor:palette.accent}}><Text style={styles.body}>An account is required to interact. Tap to dismiss.</Text></Pressable>:null}
  <Modal transparent visible={show} animationType="fade" onRequestClose={()=>setShow(false)}>
   <View style={{flex:1,backgroundColor:'#0008',justifyContent:'center',padding:28}}>
    <Card>
     <Text style={styles.title}>Join the MANEUVER community</Text>
     <Text style={styles.body}>Create an account to like posts, comment, join private groups, and register for events.</Text>
     <Action label="Create Account" onPress={()=>{setShow(false);router.push('/signup')}}/>
     <Action label="Log In" secondary onPress={()=>{setShow(false);router.push('/signup')}}/>
     <Action label="Continue browsing" secondary onPress={()=>setShow(false)}/>
    </Card>
   </View>
  </Modal>
 </Context.Provider>
}
