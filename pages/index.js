import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

function HomePage(props) {

    return (
        <Fragment>
            <Head>
                <title>Meetup Example</title>
                <meta 
                    name='descirption' 
                    content='highly active Meetups'
                />
            </Head>
            <MeetupList meetups={props.meetups} /> 
        </Fragment>
    );  
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