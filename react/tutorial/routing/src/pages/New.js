import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function New() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://routing-project-66820-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'content-type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/", { replace: true });
        })

    };

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
};

export default New;