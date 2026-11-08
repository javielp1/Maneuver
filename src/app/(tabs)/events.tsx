import {ScrollView,Text} from 'react-native';
import {router} from 'expo-router';
import {events,trainerName} from '@/data/model';
import {Action,Card,styles} from '@/components/ui';
export default function EventsScreen(){return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
 <Text style={styles.heading}>Events</Text><Text style={styles.subheading}>See what's happening in the MANEUVER community.</Text>
 {events.map(e=><Card key={e.event_id}>
  <Text style={styles.title}>{e.title}</Text><Text style={styles.meta}>{e.event_date} · Hosted by {trainerName(e.trainer_id)}</Text>
  <Text style={styles.body}>{e.description}</Text>
  <Action label="Event Details" onPress={()=>router.push({pathname:'/event/[id]',params:{id:String(e.event_id)}})}/>
 </Card>)}
 </ScrollView>}
