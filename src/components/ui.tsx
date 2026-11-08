import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export const palette = {background:'#f8fafb', card:'#ffffff', ink:'#18232c', muted:'#64727b', border:'#e2e8eb', accent:'#176d68'};
export const styles=StyleSheet.create({
  page:{flex:1,backgroundColor:palette.background},
  content:{padding:18,paddingBottom:38,gap:14},
  heading:{fontSize:28,fontWeight:'800',color:palette.ink},
  subheading:{fontSize:15,color:palette.muted,lineHeight:22},
  card:{padding:16,backgroundColor:palette.card,borderWidth:1,borderColor:palette.border,borderRadius:14,gap:10},
  title:{fontSize:18,fontWeight:'700',color:palette.ink},
  body:{fontSize:15,lineHeight:22,color:palette.ink},
  meta:{fontSize:13,color:palette.muted},
  button:{backgroundColor:palette.accent,paddingVertical:12,paddingHorizontal:16,borderRadius:10,alignItems:'center'},
  buttonText:{color:'white',fontWeight:'700',fontSize:15},
  secondaryButton:{borderColor:palette.border,borderWidth:1,paddingVertical:11,paddingHorizontal:15,borderRadius:10,alignItems:'center'},
  secondaryButtonText:{color:palette.ink,fontWeight:'700'},
  row:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:8}
});
export function Card({children}:{children:ReactNode}){return <View style={styles.card}>{children}</View>}
export function Action({label,onPress,secondary=false}:{label:string;onPress:()=>void;secondary?:boolean}){
 return <Pressable accessibilityRole="button" onPress={onPress} style={secondary?styles.secondaryButton:styles.button}><Text style={secondary?styles.secondaryButtonText:styles.buttonText}>{label}</Text></Pressable>
}
