import React, {useEffect, useState} from 'react';
import {EpisodeTypes} from "../../../interfaces";
import classNames from 'classnames/bind';
import styles from './Episode.module.scss'
import {seasonFoo} from "../../../utils";
import {Residents} from "../../index";
import {FaFolder, FaFolderOpen} from "react-icons/fa";

const cn = classNames.bind(styles)

interface EpisodeProps {
    card: EpisodeTypes
}

const EpisodeComponent = ({card}: EpisodeProps) => {

    const {id, episode, url, created, name, characters, air_date} = card;

    const [open,setOpen] = useState(false);
    const [hover,setHover] = useState(false);

    useEffect(()=>{
        open&&setHover(true);
    },[hover])

    useEffect(()=>{},[card])





    return (
        <>
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className={cn('container', open && 'infoChoose','animate__animated animate__pulse animate__fadeIn')}>
                <img className={cn('poster')} src={seasonFoo(episode)} alt={name}/>
                <div className={cn('data-container')}>
                    <div className={cn('data')}>
                        <div className={cn('name')}>{episode}</div>


                        {(hover||open)&&
                            <>
                                <div className={cn('episode','animate__animated animate__fadeIn')}>{name}</div>
                                <div className={cn('air-date','animate__animated animate__fadeIn')}>Release : {air_date}</div>
                                <div onClick={async () => {
                                    setOpen(!open)
                                }} className={cn('residents-container', open && 'residents-container-active','animate__animated animate__fadeIn')}>
                                    <span className={cn('residents-text',open &&'residents-active-text','animate__animated animate__fadeIn')}>Characters</span>
                                    <span className={cn('svg','animate__animated animate__fadeIn')}>{open ? <FaFolderOpen/> : <FaFolder/>}</span>
                                </div>
                            </>
                        }

                        {open&&
                    <span className={cn('resident-container')}>
                        {
                            characters&&characters.length > 0?
                                <Residents residents={characters}/>
                                :
                                <div className={cn('data')}>
                                    No data ...
                                </div>
                        }
                </span>
}

                    </div>
                </div>
            </div>
            {open&&<div style={{width:`${(characters.length*460)*4}px`}} className={cn('blur')}></div>}
        </>

    );
};


export default EpisodeComponent;