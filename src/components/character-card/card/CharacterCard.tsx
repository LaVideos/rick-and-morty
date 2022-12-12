import React, {useEffect, useState} from 'react';
import {CardProps} from "../../../interfaces";

import 'animate.css';

import classNames from 'classnames/bind';
import styles from './CharacterCard.module.scss'
import {useAppDispatch} from "../../../hooks/redux-hooks";
import {charactersAction} from "../../../redux";
import {NavLink, useLocation} from "react-router-dom";
import {Gender, FirstSeenEpisode, Status, Species} from "../../index";

const cn = classNames.bind(styles)


interface ICard {
    card: CardProps;
    boxShadow?: boolean
}


const CharacterCard = ({card, boxShadow = true}: ICard) => {

    const [hover, setHover] = useState(false);

    const dispatch = useAppDispatch();

    const {pathname} = useLocation();

    const {id, episode, gender, image, name, status, location,species} = card;

    useEffect(()=>{},[pathname])

    return (
        <> { card&&
            <NavLink to={`/character/id=${id}`} state={card}
                     onClick={async ()=>{
                         if(pathname.includes('/character/id=')){
                             await dispatch(charactersAction.getAccessToReload(true));
                         }
                     }}
                    onMouseEnter={() => {
                        setHover(true)
                    }} onMouseLeave={() => {
            setHover(false)
        }}
                    className={cn('card-container', boxShadow && 'card-container-box-shadow', 'animate__animated animate__pulse animate__fadeIn')}>
            <img className={cn('img')} src={image} alt={name}/>
            <div className={cn('card-data')}>
                {
                    !hover && <div className={cn('nameUnhover')}>
                        {name}
                    </div>
                }
                {
                    hover &&
                    <div className={cn('full-card-data', 'animate__animated animate__fadeIn')}>
                        <div
                            className={cn('name', name.length > 24 && 'name-smaller', (name.length > 36 || name.split(' ').length > 3) && 'name-smallest')}>{name.split(" ").map((value, index) =>
                                <span key={index} className={cn(`title-${index + 1}`, 'title')}>
                            {value}&nbsp;
                        </span>
                        )}</div>
                        <div className={cn('status-and-gender')}>
                            <Status status={status}/>
                            <Species size={'small'}
                                     colorText={'white'}
                                     species={species}/>
                        </div>
                        <div className={cn('location-last-known-box')}>
                            <div className={cn('last-known-location')}>
                                Last known location:
                            </div>
                            <div className={cn('location-last-known')}>
                                {location.name}
                            </div>
                        </div>
                        <div className={cn('location-first-seen-box')}>
                            <div className={cn('first-seen-in')}>
                                First seen in:
                            </div>
                            <div className={cn('location-first-in')}>
                                <FirstSeenEpisode episode={episode}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {
                hover && <Gender gender={gender}/>
            }
        </NavLink>}</>
    );
};

export default CharacterCard;