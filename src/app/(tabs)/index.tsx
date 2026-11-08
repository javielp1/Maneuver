import {ScrollView,Text,View,Pressable} from 'react-native';
import {router} from 'expo-router';
import {posts,trainerName} from '@/data/model';
import {Card,palette,styles} from '@/components/ui';
import {useGuest} from '@/context/GuestContext';
export default function CommunityScreen(){
 const {requireAccount}=useGuest();
 return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
  <View style={styles.row}><Text style={styles.heading}>MANEUVER</Text><Text style={styles.meta}>Guest</Text></View>
  <Text style={styles.subheading}>Community starts here. Explore freely; create an account to participate.</Text>
  {posts.map(post=><Card key={post.post_id}>
   <Pressable onPress={()=>router.push({pathname:'/trainer/[id]',params:{id:String(post.trainer_id)}})}>
    <Text style={styles.title}>{trainerName(post.trainer_id)}</Text>
    <Text style={styles.meta}>Trainer · {post.created_at} · View profile ›</Text>
   </Pressable>
   <View style={{height:110,backgroundColor:'#e7efed',borderRadius:10,alignItems:'center',justifyContent:'center'}}><Text style={styles.meta}>Community post image placeholder</Text></View>
   <Text style={styles.body}>{post.content}</Text>
   <View style={{flexDirection:'row',gap:12}}>
    <Pressable onPress={requireAccount} style={{padding:8}}><Text style={{color:palette.accent,fontWeight:'700'}}>♡ Like</Text></Pressable>
    <Pressable onPress={requireAccount} style={{padding:8}}><Text style={{color:palette.accent,fontWeight:'700'}}>◻ Comment</Text></Pressable>
   </View>
  </Card>)}
 </ScrollView>
}
