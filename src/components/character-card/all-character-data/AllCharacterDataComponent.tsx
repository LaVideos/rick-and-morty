import React, {useEffect} from 'react';
import 'animate.css';

import classNames from 'classnames/bind';
import styles from './AllCharacterData.module.scss'
import {useLocation, useParams} from "react-router-dom";
import {CardProps, EpisodeTypes} from "../../../interfaces";
import {EpisodeComponent, Gender, Species, Status} from "../../index";
import {createStrFromArr} from "../../../utils";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {episodesAction} from "../../../redux";

const cn = classNames.bind(styles)

const AllCharacterDataComponent = () => {

    const {id} = useParams();
    const {state} = useLocation();
    let characterData:CardProps;
    characterData = state;
    const {episodes_} = useAppSelector(state1 => state1.episodes);
    const dispatch = useAppDispatch();

    const {episode,location,image,name,origin,species,status,type,gender} = characterData;

    useEffect(()=>{
        dispatch(episodesAction.getEpisodesById(createStrFromArr(episode,39)))
    },[id])

    return (
        <div className={cn('container-card')}>
            <div className={cn('character-all-data')}>
                <img className={cn('img')} src={image} alt={name}/>
                <div className={cn('text-data')}>
                    <div className={cn('text-data-box')}>
                        <div className={cn('name')}>{name}</div>
                        <span className={cn('status-species-box')}><Status size={'medium'} colorText={'white'}
                                                                           status={status}/><Species size={'medium'}
                                                                                                     colorText={'white'}
                                                                                                     species={species}/></span>
                        <div className={cn('type')}><span
                            className={cn('info')}>Type :</span> &nbsp;{type ? type : '??????'}</div>
                        <div className={cn('origin')}><span className={cn('info')}>Origin :</span>&nbsp;{origin.name}</div>
                        <div className={cn('origin')}><span
                            className={cn('info')}>Last known location :</span> {location.name}</div>
                    </div>
                    <div className={cn('gender')}><Gender size={'big'} gender={gender}/></div>
                </div>
            </div>

            <div>
                <div className={cn('episodes')}>Episodes where this character acts:</div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[ Navigation, Pagination, Mousewheel, Keyboard]} className='mySwiper'>
                    {
                        episodes_&&episodes_.map((value:EpisodeTypes )=>
                            <SwiperSlide key={value.id} style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
                            <EpisodeComponent card={value}/>
                            </SwiperSlide>
                        )
                    }
                </Swiper>

            </div>

        </div>
    );
};

export default AllCharacterDataComponent;