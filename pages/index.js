import MeetupList from '../components/meetups/MeetupList';

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
    // fetch data from API
    return {
        props: {
            meetups: dummy_meetups
        },
        revalidate: 1
    };
}

export default HomePage;