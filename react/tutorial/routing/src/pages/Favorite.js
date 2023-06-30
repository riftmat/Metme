import { useContext } from "react";

import FavoriteContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {

    const favoriteCtx = useContext(FavoriteContext);

    let content;

    if (favoriteCtx.totalFavorites === 0) {
        content = <p>You got no favorites</p>
    } else {
        content = <MeetupList meetups={favoriteCtx.favorites}></MeetupList>;
    }
    
    return (
        <section>
            <h1>My favorites</h1>
            {content}
        </section>
    )
};

export default FavoritesPage;