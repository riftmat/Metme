import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';

import { useContext } from 'react';
import FavoriteContext from '../../store/favorite-context';

function MainNavigation() {

    const favoriteCtx = useContext(FavoriteContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>REACT ROUTING</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorite Meetups
                            <span className={classes.badge}>
                                {favoriteCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default MainNavigation;