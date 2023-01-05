import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail 
            image='https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804481_960_720.jpg' 
            title='First Meetup' 
            address='Some address' 
            description='description'
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {params: {
                meetupId: 'm1'
                }
            },
            {params: {
                meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 'https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804481_960_720.jpg', 
                id: meetupId,
                title: 'First Meetup',
                address: 'Some address', 
                description: 'description'
            }
        }
    };
}

export default MeetupDetails;