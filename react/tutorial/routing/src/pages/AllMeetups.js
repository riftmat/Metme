import MeetupList from "../components/meetups/MeetupList";

import { useState } from "react";
import { useEffect } from "react";

function AllMetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedM, setLoadedM] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch ('https://routing-project-66820-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedM(meetups);
    });
  }, []);  

  if (isLoading) {
    return (
      <section>
        <p>LOADING...</p>
      </section>
    );
  }

    return (
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={loadedM} />
        </section>
    )
};

export default AllMetupsPage;