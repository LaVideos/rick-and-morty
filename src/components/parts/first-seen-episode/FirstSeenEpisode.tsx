import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {useLocation} from "react-router-dom";
import {episodesAction} from "../../../redux";


interface LastKnownLocationProps{
    episode:Array<string>
}

const FirstSeenEpisode = ({episode}:LastKnownLocationProps) => {

    const {episode: episode_} = useAppSelector(state => state.episodes);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(episodesAction.getEpisodeById(episode[0].slice(39).replaceAll('/', '')));
    },[dispatch])
    
    return <>{episode_ && episode_?.name}</>
};

export default FirstSeenEpisode;