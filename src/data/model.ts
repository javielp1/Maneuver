// The eight entities and nine relationships in Maneuver.pdf.
// This is SAMPLE DATA ONLY: no database, authentication, or payment processing.
export type User = {user_id:number; first_name:string; last_name:string; email:string; password_hash:string; role:'client'|'trainer'; created_at:string};
export type TrainerProfile = {trainer_id:number; user_id:number; bio:string; specialty:string; experience_years:number};
export type Post = {post_id:number; trainer_id:number; content:string; created_at:string};
export type Service = {service_id:number; trainer_id:number; service_name:string; description:string; price:number; duration_minutes:number};
export type Booking = {booking_id:number; user_id:number; service_id:number; booking_date:string; booking_time:string; status:string; payment_status:string};
export type Event = {event_id:number; trainer_id:number; title:string; description:string; event_date:string; location:string};
export type PrivateGroup = {group_id:number; trainer_id:number; group_name:string; description:string};
export type GroupMembership = {membership_id:number; group_id:number; user_id:number; status:string};

export const users: User[] = [
  {user_id:1,first_name:'Chris',last_name:'Morgan',email:'chris@example.invalid',password_hash:'DEMO_NOT_A_HASH',role:'trainer',created_at:'2026-10-01'},
  {user_id:2,first_name:'Jordan',last_name:'Lee',email:'jordan@example.invalid',password_hash:'DEMO_NOT_A_HASH',role:'client',created_at:'2026-10-02'},
  {user_id:3,first_name:'Taylor',last_name:'Reed',email:'taylor@example.invalid',password_hash:'DEMO_NOT_A_HASH',role:'client',created_at:'2026-10-03'},
  {user_id:4,first_name:'Alex',last_name:'Brooks',email:'alex@example.invalid',password_hash:'DEMO_NOT_A_HASH',role:'trainer',created_at:'2026-10-05'}
];
export const trainers: TrainerProfile[] = [
  {trainer_id:10,user_id:1,bio:'Helping athletes build habits and confidence.',specialty:'Strength training',experience_years:5},
  {trainer_id:11,user_id:4,bio:'Movement, mobility, and sustainable training.',specialty:'Mobility & conditioning',experience_years:4}
];
export const posts: Post[] = [
  {post_id:20,trainer_id:10,content:'Consistency is built one session at a time. Join us this weekend!',created_at:'2026-11-05'},
  {post_id:21,trainer_id:11,content:'Start where you are. A small step today still counts.',created_at:'2026-11-04'}
];
export const services: Service[] = [
  {service_id:30,trainer_id:10,service_name:'1-on-1 Strength Session',description:'Personalized strength coaching.',price:65,duration_minutes:60},
  {service_id:31,trainer_id:10,service_name:'Intro Consultation',description:'Discuss your goals and training experience.',price:25,duration_minutes:30},
  {service_id:32,trainer_id:11,service_name:'Mobility Session',description:'Improve flexibility and movement quality.',price:45,duration_minutes:45}
];
export const bookings: Booking[] = [
  {booking_id:40,user_id:2,service_id:30,booking_date:'2026-11-16',booking_time:'10:00',status:'confirmed',payment_status:'paid'}
];
export const events: Event[] = [
  {event_id:50,trainer_id:10,title:'Community Training Day',description:'A group session focused on movement and teamwork.',event_date:'2026-11-21',location:'MANEUVER Training Space'},
  {event_id:51,trainer_id:11,title:'Mobility Workshop',description:'Learn simple mobility drills.',event_date:'2026-11-28',location:'MANEUVER Training Space'}
];
export const groups: PrivateGroup[] = [
  {group_id:60,trainer_id:10,group_name:'Strength Crew',description:'Private coaching community for members.'},
  {group_id:61,trainer_id:11,group_name:'Movement Club',description:'A private place to discuss mobility and consistency.'}
];
export const memberships: GroupMembership[] = [
  {membership_id:70,group_id:60,user_id:3,status:'approved'},
  {membership_id:71,group_id:61,user_id:2,status:'pending'}
];

// Foreign-key relationships: trainer -> user; post/service/event/group -> trainer;
// booking -> user + service; membership -> user + group.
export const trainerName = (trainerId:number) => {
  const profile=trainers.find(t=>t.trainer_id===trainerId);
  const person=users.find(u=>u.user_id===profile?.user_id);
  return person ? `${person.first_name} ${person.last_name}` : 'MANEUVER Trainer';
};
