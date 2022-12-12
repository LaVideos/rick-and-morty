import React, {useEffect, useState} from 'react';

import classNames from 'classnames/bind';
import styles from './Location.module.scss'
import {LocationParamsProps, LocationProps} from "../../../interfaces";
import {LocationCard} from "../location-card/LocationCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {Button, Loading, Radio, ResponsePopup} from "../../index";
import Input from "../../input/Input";
import {useForm} from "react-hook-form";
import {episodesAction, locationAction} from "../../../redux";
import {locationTypeFoo} from "../../../utils";
import {dimension, type} from "../../../constants";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import {UseCharacter} from "../../../hooks/use-character";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import Error from "../../error/Error";

const cn = classNames.bind(styles)

const LocationsComponents = () => {
    const [show, setShow] = useState(false);
    const [showType, setShowType] = useState(false);
    const dispatch = useAppDispatch();
    const {locationParams} = useAppSelector(state => state.locations);
    const [showDimension, setShowDimension] = useState(false);
    const {error, fetchNextPage, hasNextPage, status, infinityQuery}
        = UseCharacter({filterLocation: locationParams?locationParams:{
            name:"",
            type:"",
            dimension:""
        }, queryKey: 'locations'});


    console.log(locationParams)

    const {
        reset,
        register,
        handleSubmit,
    } = useForm({mode: "all"});

    const submit = async (data: LocationParamsProps) => {
        await dispatch(locationAction.getLocationParams(data));
        reset();
    }

    useEffect(() => {
        status === 'loading' && ResponsePopup.Pending().then();
    }, [dispatch])

    useEffect(()=>{
        if(!infinityQuery){
            dispatch(locationAction.getLocationParams({
                name:"",
                type:"",
                dimension:""
            }))
        }
    },[])


    return (
        <div className={cn('location-container')}>
            <>

                <div className={cn('form-container')}>
                    <Button onclick={() => setShow(!show)} text={!show ? 'Show Filters' : 'Hide Filters'}
                            size={'medium'}/>
                    {show &&
                        <form className={cn('form')} onSubmit={handleSubmit(submit)}>

                            <div className={cn('filter-container')}>
                                <div className={cn('type-container')}>
                                    <span className={cn('type-text')} onClick={() =>
                                        setShowType(!showType)}>
                                        Show Type Radio{showType ? <BsChevronDown/> : <BsChevronUp/>}</span>
                                    {showType &&
                                        <div className={cn('radio-container-location-type')}>
                                            {
                                                type.map((value: string, index: number) => <span
                                                    style={{display: 'flex'}}
                                                    key={index}>
                                    <Radio register={register}
                                           text={value ? <span className={cn('radio-container-data')}>
                                        <span>{value}</span>
                                         <img className={cn('img-type')} src={locationTypeFoo(value)}
                                              alt=""/>
                                    </span> : 'all'} name={'type'}
                                           value={value}/>
                                </span>)
                                            }
                                        </div>
                                    }
                                </div>

                                <div className={cn('filter-input-container')}>
                                    <Input register={register} label={'Location name'} name={'name'}
                                           placeHolder={'Name'}/>
                                </div>

                                <div>
                                    <span className={cn('dimension-text')} onClick={() =>
                                        setShowDimension(!showDimension)}>
                                        Show Dimension Radio{showDimension ? <BsChevronDown/> : <BsChevronUp/>}</span>
                                    {showDimension &&
                                        <div className={cn('radio-container-location-dimension')}>
                                            {
                                                dimension.map((value: string, index: number) => <span
                                                    style={{display: 'flex'}}
                                                    key={index}>
                                        <Radio register={register} text={value ? value : 'all'} name={'dimension'}
                                               value={value}/>
                                    </span>)
                                            }
                                        </div>
                                    }
                                </div>
                            </div>

                            <Button onclick={() => undefined} text={'Find'} size={'medium'}/>

                        </form>
                    }
                </div>

            </>
            <InfiniteScroll
                dataLength={infinityQuery ? infinityQuery.results.length : 0}
                next={() => undefined}
                hasMore={!!hasNextPage}
                loader={''}
            >
                <div style={{
                    width: '84vw',
                    minHeight: '400px',
                    overflow: 'auto',
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: 'center',
                }}>

                    {status==='loading'&&<Loading/>}
                    {error&& <Error/>}
                    {error&&<div className={cn('no-data')}>
                        No Data ...
                    </div>}


                    {

                    infinityQuery && infinityQuery.results.map((value: LocationProps) =>
                        <LocationCard key={value.id} card={value}/>)}</div>

                {hasNextPage && <Button size={'medium'} text={'Load More'} onclick={() =>
                    fetchNextPage()
                }/>}
            </InfiniteScroll>
        </div>
    );
};

export default LocationsComponents;