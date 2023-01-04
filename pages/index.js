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

function HomePage() {
    return <MeetupList meetups={dummy_meetups} /> 
}

export default HomePage;