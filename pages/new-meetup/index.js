// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function addMeetupHandler(enterdMeetupData){
        console.log(enterdMeetupData);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default NewMeetupPage;