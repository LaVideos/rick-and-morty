import React, {useEffect, useState} from 'react';
import {Button, CharacterCard, Gender, Loading, Radio, ResponsePopup, Select, Status} from "../../index";
import classNames from 'classnames/bind';
import styles from './CharactersCards.module.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import {CardProps, ParamsProps} from "../../../interfaces";
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import Input from "../../input/Input";
import {charactersAction} from "../../../redux";
import {UseCharacter} from "../../../hooks/use-character";
import Error from "../../error/Error";


const cn = classNames.bind(styles)

export const CharactersCardsComponent = () => {

    const {charactersParams} = useAppSelector(state => state.characters);
    const [show,setShow] = useState(false);

    const dispatch = useAppDispatch();

    let {error, fetchNextPage, hasNextPage, status,infinityQuery}
        = UseCharacter(
            {filterCharacters:charactersParams?charactersParams:{name:"",
                    status:"",
                    species:"",
                    type:"",
                    gender:"",
                    location:"",
                    origin:""},queryKey:'characters'});

    useEffect(()=>{
        status==='loading'&&ResponsePopup.Pending().then();
    },[dispatch])

    useEffect(()=>{
        if(!infinityQuery){
            dispatch(charactersAction.getCharacterParams({name:"",
                status:"",
                species:"",
                type:"",
                gender:"",
                location:"",
                origin:""}))
        }
    },[])

    const {
        reset,
        register,
        handleSubmit,
    } = useForm({mode: "all"});

    const submit =async (data: ParamsProps) => {
        await dispatch(charactersAction.getCharacterParams(data));
        reset();
    }





    return (
        <div className={cn('cards-container')}>
            {
            <><div className={cn('filter-container')}>
                <Button onclick={()=>setShow(!show)} text={!show?'Show Filters':'Hide Filters'} size={'medium'}/>

                {show&&
                <form className={cn('form-container')} onSubmit={handleSubmit(submit)}>

                    <div className={cn('filter-input-container')}>
                        <Input register={register} label={'Character name'} name={'name'} placeHolder={'Name'}/>

                        <Input register={register} label={'Character type'} name={'type'}
                               placeHolder={'Type'}/>

                        <Input register={register} label={'Location'} disabled={true} name={'location'}
                               placeHolder={'Location'}/>

                        <Input register={register} label={'Origin'} disabled={true} name={'origin'}
                               placeHolder={'Origin'}/>
                    </div>

                    <div className={cn('radio-container')}>
                        <Radio value={'Male'} name={'gender'}
                              text={<span className={cn('gender-radio')} ><span>Male</span><Gender
                                  gender={'Male'}/></span>} register={register}/>
                    <Radio value={'Female'} name={'gender'}
                           text={<span className={cn('gender-radio')}><span>Female</span><Gender
                               gender={'Female'}/></span>} register={register}/>
                    <Radio value={'Genderless'} name={'gender'}
                           text={<span className={cn('gender-radio')}><span>Genderless</span><Gender
                               gender={'Genderless'}/></span>} register={register}/>
                    <Radio value={'unknown'} name={'gender'}
                           text={<span className={cn('gender-radio')}><span>unknown</span><Gender
                               gender={'unknown'}/></span>} register={register}/>
                    <Radio text={<span className={cn('gender-radio')}><span>Any</span><Gender
                        gender={'any'}/></span>} name={'gender'} value={""} register={register}/>
                    </div>

                    <div className={cn('select-and-status-container')}>
                        <div className={cn('select-container')}>
                            <Select register={register}/>
                        </div>

                        <div className={cn('status-container')}>
                            <Radio text={<Status colorText={'grey'} status={'Alive'}/>} name={'status'} value={'Alive'}
                                   register={register}/>
                            <Radio text={<Status colorText={'grey'} status={'Dead'}/>} name={'status'} value={'Dead'}
                                   register={register}/>
                            <Radio text={<Status colorText={'grey'} status={'unknown'}/>} name={'status'}
                                   value={'unknown'} register={register}/>
                        </div>

                    </div>

                    <Button onclick={()=>undefined} text={'Find'} size={'medium'}/>

                </form>}

            </div>
            {
                <InfiniteScroll
                    dataLength={infinityQuery ? infinityQuery.results.length : 0}
                    next={() => undefined}
                    hasMore={!!hasNextPage}
                    loader={""}
                    refreshFunction={()=>submit}
                    className={cn('scroll')}
                >
                    <div style={{
                        // width: '84vw',
                        // minHeight:'400px',
                        // overflow: 'auto',
                        // display: 'flex',
                        // flexWrap: "wrap",
                        // justifyContent: 'space-between',
                        // padding: '20px'
                    }}>

                        {status==='loading'&&<Loading/>}
                        {
                            error&&
                            <Error/>}
                        {error&&<div className={cn('no-data')}>
                            No Data ...
                        </div>}

                        { infinityQuery &&infinityQuery.results.map((character: CardProps) => (
                                <CharacterCard key={character.id} card={character}/>
                            ))}

                    </div>
                    {hasNextPage && <Button size={'medium'} text={'Load More'} onclick={() =>
                        fetchNextPage()
                    }/>}
                </InfiniteScroll>
            }
            </>
        }</div>
    );
};
