import {useInfiniteQuery} from "@tanstack/react-query";
import {LocationParamsProps, ParamsProps} from "../interfaces";
import {RequestService} from "../services";
import {useMemo} from "react";
import {EpisodeParamsProps} from "../interfaces/ParamsProps";


interface UseInfinityScrollProps{
    filterCharacters?:ParamsProps,
    filterEpisodes?:EpisodeParamsProps,
    filterLocation?:LocationParamsProps,
    queryKey:string
}


export const UseCharacter = ({filterCharacters,filterLocation,filterEpisodes,queryKey}:UseInfinityScrollProps) => {

    let filters;

    if(queryKey==='characters'){
       filters = filterCharacters;
    }else if(queryKey==='locations'){
       filters= filterLocation
    }
    else if(queryKey==='episodes'){
       filters = filterEpisodes
    }


    const getData = async (page:number=1,params_:ParamsProps|LocationParamsProps|EpisodeParamsProps)=>{
        if(queryKey==='characters'){
            const {data} = await RequestService.getAllCharacters({page,params:params_});
            return data
        }else if(queryKey==='locations'){
            const {data} = await RequestService.getAllLocations({page,params:params_});
            return data
        }
        else if(queryKey==='episodes'){
            const {data} = await RequestService.getAllEpisodes({page,params:params_});
            return data
        }

    }

    const { data, error, fetchNextPage, status, hasNextPage,isFetching ,isFetchingNextPage} = useInfiniteQuery(
        [queryKey, filters],
        ({queryKey, pageParam=1}:any) => {
            return getData(pageParam,queryKey[1])
        },
        {
            getNextPageParam: (lastPage) => {

                   let previousPage = lastPage.info.prev ? +lastPage.info.prev.split('=')[1].split("&")[0] : 0;

                   const currentPage = previousPage + 1;

                   if (currentPage === lastPage.info.pages) return false;
                   return currentPage + 1;

            }

        }
    )

    const infinityQuery = useMemo(() => data?.pages.reduce((prev, page) => {
        return {
            info: page.info,
            results: [...prev.results, ...page.results]
        }
    }), [data])



    return {
        error,data,fetchNextPage,hasNextPage,status,isFetching,isFetchingNextPage,infinityQuery
    }
}