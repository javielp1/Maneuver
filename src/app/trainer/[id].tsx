import {ScrollView,Text} from 'react-native';
import {useLocalSearchParams,router} from 'expo-router';
import {groups,services,trainers,trainerName} from '@/data/model';
import {Action,Card,styles} from '@/components/ui';
import {useGuest} from '@/context/GuestContext';
export default function TrainerScreen(){
 const {id}=useLocalSearchParams<{id:string}>();const trainer=trainers.find(t=>t.trainer_id===Number(id));const {requireAccount}=useGuest();
 if(!trainer)return <Text>Trainer not found</Text>;
 return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
  <Text style={styles.heading}>{trainerName(trainer.trainer_id)}</Text><Text style={styles.subheading}>{trainer.specialty}</Text>
  <Card><Text style={styles.body}>{trainer.bio}</Text><Text style={styles.meta}>{trainer.experience_years} years experience</Text></Card>
  <Text style={styles.title}>Training services</Text>
  {services.filter(s=>s.trainer_id===trainer.trainer_id).map(s=><Card key={s.service_id}>
   <Text style={styles.title}>{s.service_name} · ${s.price}</Text>
   <Text style={styles.body}>{s.description}</Text>
   <Action label="Explore Booking" onPress={()=>router.push('/(tabs)/booking')}/>
  </Card>)}
  <Text style={styles.title}>Private groups</Text>
  {groups.filter(g=>g.trainer_id===trainer.trainer_id).map(g=><Card key={g.group_id}>
   <Text style={styles.title}>{g.group_name}</Text><Text style={styles.body}>{g.description}</Text>
   <Action label="View Group" secondary onPress={()=>router.push({pathname:'/group/[id]',params:{id:String(g.group_id)}})}/>
   <Action label="Request to Join" onPress={requireAccount}/>
  </Card>)}
 </ScrollView>
}
