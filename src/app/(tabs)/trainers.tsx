import {ScrollView,Text,View} from 'react-native';
import {router} from 'expo-router';
import {trainers,trainerName} from '@/data/model';
import {Action,Card,styles} from '@/components/ui';
export default function TrainersScreen(){return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
 <Text style={styles.heading}>Trainers</Text><Text style={styles.subheading}>Meet the people behind the MANEUVER community.</Text>
 {trainers.map(t=><Card key={t.trainer_id}>
  <Text style={styles.title}>{trainerName(t.trainer_id)}</Text>
  <Text style={styles.meta}>{t.specialty} · {t.experience_years} years experience</Text>
  <Text style={styles.body}>{t.bio}</Text>
  <Action label="View Profile" onPress={()=>router.push({pathname:'/trainer/[id]',params:{id:String(t.trainer_id)}})}/>
 </Card>)}
 </ScrollView>}
