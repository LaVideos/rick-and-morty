import React from 'react';
import rickAndMorty from '../../assets/png/Rick-and-Morty.png'
import portal from '../../assets/gif/portal-rick-and-morty.gif'
import character from '../../assets/gif/RickAndMorty_MortyConfusedBlink1500.gif'
import episodes from '../../assets/gif/5dd1c7902e40ff00232f384a.gif'

import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import {NavLink} from "react-router-dom";

const cn = classNames.bind(styles)

const Header = () => {
    return (
        <div className={cn('header-container')}>
            <div className={cn('rick-and-morty-box')}><img src={rickAndMorty} alt={'Rick And Morty'} className={cn('rick-and-morty')}/></div>
            <div className={cn('nav')}>
                <div className={cn('link-box')}><NavLink to={'/location'}>
                    <img className={cn('gif-portal')} src={portal} alt="locations"/>
                </NavLink></div>
                <div className={cn('link-box')}><NavLink to={'/characters'}>
                    <img className={cn('gif-character')} src={character} alt={'сharacters'}/>
                </NavLink></div>
                <div className={cn('link-box')}><NavLink to={'/episodes'}>
                    <img className={cn('gif-episodes')} src={episodes} alt={'episodes'}/>
                </NavLink></div>
            </div>
        </div>
    );
};

export default Header;
