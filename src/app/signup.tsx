import {ScrollView,Text,TextInput,View} from 'react-native';
import {Card,palette,styles} from '@/components/ui';
export default function SignupScreen(){return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
 <Text style={styles.heading}>Join MANEUVER</Text>
 <Text style={styles.subheading}>Design prototype only. Account creation is not connected to a backend.</Text>
 <Card><Text style={styles.title}>Create Account</Text>
 {['First name','Last name','Email','Password'].map(label=><View key={label} style={{gap:5}}><Text style={styles.meta}>{label}</Text><TextInput accessibilityLabel={label} placeholder={label} editable={false} style={{borderWidth:1,borderColor:palette.border,padding:12,borderRadius:9,color:palette.muted}}/></View>)}
 <Text style={styles.meta}>Registration is disabled in Sprint 1.</Text>
 </Card></ScrollView>}
