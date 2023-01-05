import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const dummy_meetups = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804481_960_720.jpg',
        address: 'Some address 7, 7777 City',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804481_960_720.jpg',
        address: 'Some address 2, 7777 City',
        description: 'This is a second meetup'
    }
];

function HomePage(props) {

    return <MeetupList meetups={props.meetups} /> 
}

// Server Site rendering
//export async function getServerSideProps(context) {
//    const req = context.req;
//    const res = context.res;
//    // fetch data from an API
//    return {
//        props:{
//            meetups: dummy_meetups
//        }
//    };
//}

// Static Site Generation
export async function getStaticProps() {
    // fetch data from DB
    const client = await MongoClient.connect('mongodb://admin:password@localhost:27017/meetups?authSource=admin');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    };
}

export default HomePage;