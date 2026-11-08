import {ScrollView,Text} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import {events,trainerName} from '@/data/model';
import {Action,Card,styles} from '@/components/ui';
import {useGuest} from '@/context/GuestContext';
export default function EventScreen(){const {id}=useLocalSearchParams<{id:string}>();const item=events.find(e=>e.event_id===Number(id));const {requireAccount}=useGuest();
 if(!item)return <Text>Event not found</Text>;
 return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
 <Text style={styles.heading}>{item.title}</Text><Card>
 <Text style={styles.meta}>Host: {trainerName(item.trainer_id)}</Text><Text style={styles.body}>{item.description}</Text>
 <Text style={styles.body}>Date: {item.event_date}</Text><Text style={styles.body}>Location: {item.location}</Text>
 <Action label="Register (Demo)" onPress={requireAccount}/>
 </Card></ScrollView>}
