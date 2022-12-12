import React, {useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import styles from './LocationCard.module.scss'
import {LocationProps} from "../../../interfaces";
import {locationTypeFoo} from "../../../utils";
import {FaFolderOpen,FaFolder} from 'react-icons/fa';
import {Residents} from "../../index";
import 'animate.css';



const cn = classNames.bind(styles)

interface LocationCardProps {
    card: LocationProps
}

export const LocationCard = ({card}: LocationCardProps) => {
    const {id, name, type, residents, dimension} = card;

    const [open,setOpen] = useState(false);
    const [hover,setHover] = useState(false);

    useEffect(()=>{
        open&&setHover(true);
    },[hover])


    return (
        <>
            <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className={cn('container', open && 'infoChoose','animate__animated animate__pulse animate__fadeIn')}>
                <div className={cn('card-container')}>
                    <div className={cn('text-container')}>
                        {
                            (!hover)&&<div className={cn('nameUnhover')}>
                                <span className={cn('name-text-unHover')}>{name}</span>
                            </div>
                        }

                        {(hover||open)&&
                            <>
                            <div className={cn('location-info-text-container','animate__animated animate__fadeIn')}>
                                <div className={cn('name')}>{name}</div>
                                <div className={cn('type-box')}>
                                    <span className={cn('type-text')}>type : &nbsp;</span>
                                    <span className={cn('type')}>{type}</span>
                                </div>
                                <div className={cn('type-container')}>
                                    <span className={cn('type-text')}>dimension : &nbsp;</span>
                                    <span
                                        className={cn('dimension')}>{dimension === 'unknown' ? '???????' : dimension}</span>
                                </div>

                                <div onClick={async () => {
                                    setOpen(!open)
                                }} className={cn('residents-container', open && 'residents-container-active')}>
                                    <span className={cn('residents-text')}>Residents</span>
                                    {open ? <FaFolderOpen/> : <FaFolder/>}
                                </div>

                            </div>

                        </>
                        }
                    </div>
                    <img className={cn('img-type')} src={locationTypeFoo(type)} alt=""/>
                </div>
                {open &&
                    <span className={cn('resident-container')}>
                        {
                            residents.length > 0?
                                    <Residents residents={residents}/>
                                :
                                <div className={cn('data')}>
                                    No data ...
                                </div>
                        }
                </span>
                }
            </div>
            {open&&<div className={cn('blur')}></div>}
        </>

    );
};