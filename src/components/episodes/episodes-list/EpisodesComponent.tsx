import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import classNames from 'classnames/bind';
import styles from './Episodes.module.scss'
import {EpisodeTypes} from "../../../interfaces";
import {Button, EpisodeComponent, Radio, ResponsePopup} from "../../index";
import Input from "../../input/Input";
import {useForm} from "react-hook-form";
import {UseCharacter} from "../../../hooks/use-character";
import {charactersAction, episodesAction} from "../../../redux";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux-hooks";
import {EpisodeParamsProps} from "../../../interfaces/ParamsProps";
import Loading from "../../loading/Loading";
import Error from "../../error/Error";

const cn = classNames.bind(styles)



const EpisodesComponent = () => {
    const dispatch = useAppDispatch();
    let {params_,episodes_} = useAppSelector(state => state.episodes);
    const {error, fetchNextPage, hasNextPage, status,infinityQuery}
        = UseCharacter({filterEpisodes:params_?params_:{name:"",
            episode:''
        },queryKey:'episodes'})
    const [show,setShow] = useState(false);

    const {
        reset,
        register,
        handleSubmit,
    } = useForm({mode: "all"});

    const submit = async (data: EpisodeParamsProps) => {
        if(data.name&&!data.episode){
            dispatch(episodesAction.setUndefined());
            dispatch(episodesAction.getEpisodesParams(data));
        }else if(!data.name&&data.episode) {
           await dispatch(episodesAction.getEpisodesById(data.episode));
        }
        reset();
    }

    console.log(params_)

    useEffect(() => {
        status === 'loading' && ResponsePopup.Pending().then();
    }, [dispatch])

    useEffect(()=>{
        if(!infinityQuery||!episodes_){
            dispatch(episodesAction.getEpisodesParams({
                name:"",
                episode:''
            }))
        }
    },[])


    return (
        <div className={cn('episodes-container')}>

            <div className={cn('form-container')}>
                <Button onclick={()=>setShow(!show)} text={!show?'Show Filters':'Hide Filters'} size={'medium'}/>
                {show&&
                    <form className={cn('form')} onSubmit={handleSubmit(submit)}>

                        <div className={cn('input-container')}>
                            <Input placeHolder={'Title'} name={'name'} register={register} label={'name'}/>
                        </div>

                        <div className={cn('season-container')}>
                            <Radio text={'Season 1'} name={'episode'} value={'1,2,3,4,5,6,7,8,9,10,11'} register={register}/>
                            <Radio text={'Season 2'} name={'episode'} value={'12,13,14,15,16,17,18,19,20,21'} register={register}/>
                            <Radio text={'Season 3'} name={'episode'} value={'22,23,24,25,26,27,28,29,30,31'} register={register}/>
                            <Radio text={'Season 4'} name={'episode'} value={'32,33,34,35,36,37,38,39,40,41'} register={register}/>
                            <Radio text={'Season 5'} name={'episode'} value={'42,43,44,45,46,47,48,49,50,51'} register={register}/>
                        </div>

                        <Button onclick={() => undefined} text={'Find'} size={'medium'}/>

                    </form>
                }

            </div>



            <InfiniteScroll
                dataLength={infinityQuery ? infinityQuery.results.length : 0}
                next={fetchNextPage}
                hasMore={!!hasNextPage}
                loader={<Loading/>}
            >
                <div style={{
                    width: '84vw',
                    overflow: 'auto',
                    minHeight:'400px',
                    display: 'flex',
                    flexWrap: "wrap",
                    justifyContent: 'space-between',
                    padding: '20px'
                }}>


                    <>{status === 'loading' && <Loading/>}
                        {error && <Error/>}
                        {(error&&!episodes_) && <div className={cn('no-data')}>
                            No Data ...
                        </div>}</>



                    { !episodes_ ?
                    <div className={cn('episodes')}>{infinityQuery && infinityQuery.results.map((value: EpisodeTypes) =>
                        <EpisodeComponent key={value.id} card={value}/>)}</div>

                        :
                        <div className={cn('episodes')}>
                            {episodes_ && episodes_.map((value: EpisodeTypes,index) =>
                                <EpisodeComponent key={index} card={value}/>)}
                        </div>
                    }

                </div>

            </InfiniteScroll>
        </div>
    );
};

export default EpisodesComponent;