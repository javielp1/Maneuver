import {ScrollView,Text} from 'react-native';
import {router} from 'expo-router';
import {services,trainerName} from '@/data/model';
import {Action,Card,styles} from '@/components/ui';
import {useGuest} from '@/context/GuestContext';
export default function BookingScreen(){const {requireAccount}=useGuest();return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
 <Text style={styles.heading}>Booking</Text>
 <Text style={styles.subheading}>Explore training services. Booking and payment are placeholders in Sprint 1.</Text>
 {services.map(s=><Card key={s.service_id}>
  <Text style={styles.title}>{s.service_name}</Text>
  <Text style={styles.meta}>{trainerName(s.trainer_id)} · {s.duration_minutes} min</Text>
  <Text style={styles.body}>{s.description}</Text>
  <Text style={styles.title}>${s.price}</Text>
  <Action label="View Trainer" secondary onPress={()=>router.push({pathname:'/trainer/[id]',params:{id:String(s.trainer_id)}})}/>
  <Action label="Book Session (Demo)" onPress={requireAccount}/>
 </Card>)}
 </ScrollView>}
