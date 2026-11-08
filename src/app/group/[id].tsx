import {ScrollView,Text} from 'react-native';
import {useLocalSearchParams} from 'expo-router';
import {groups,trainerName} from '@/data/model';
import {Action,Card,styles} from '@/components/ui';
import {useGuest} from '@/context/GuestContext';
export default function GroupScreen(){const {id}=useLocalSearchParams<{id:string}>();const group=groups.find(g=>g.group_id===Number(id));const {requireAccount}=useGuest();
 if(!group)return <Text>Group not found</Text>;
 return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
 <Text style={styles.heading}>{group.group_name}</Text><Text style={styles.subheading}>Managed by {trainerName(group.trainer_id)}</Text>
 <Card><Text style={styles.body}>{group.description}</Text><Text style={styles.meta}>Private posts are only visible to approved members.</Text>
 <Action label="Request Access" onPress={requireAccount}/></Card>
 </ScrollView>}
