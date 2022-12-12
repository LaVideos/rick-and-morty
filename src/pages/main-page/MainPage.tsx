import React from 'react';
import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";
import png from '../../assets/png/kisspng-rick-sanchez-morty-smith-pickle-rick-youtube-rick-rick-and-morty-5acb1188dd0a87.2585329315232577369054.png'

const cn = classNames.bind(styles)


const MainPage = () => {
    return (
        <div className={cn('container')}>
            <div className={cn('text-container')}>
                <div className={cn('text')}>
                    Welcome to the my site
                </div>
                <div className={cn('sub-text')}>Here you can check all info what is available on <span className={cn('rickAndMorty')}>Rick And Morty</span> Api </div>
            </div>
            <div className={cn('img-container')}><img className={cn('img')} src={png} alt=""/></div>
        </div>
    );
};

export default MainPage;