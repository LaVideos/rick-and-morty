import {useMemo} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {RequestService} from "../services";

export const useEpisode = (id:string) => {

    const getData = async ()=>{
        const {data} = await RequestService.getEpisodeById(id);
        return data
    }

    const { data, error, fetchNextPage, status, hasNextPage,isFetching ,isFetchingNextPage} = useInfiniteQuery(
        ['resident'],
        () => getData()
    )

    const episodes = useMemo(() => data?.pages.reduce((prev, page) => {
        return {
            info: page.info,
            results: [...prev.results, ...page.results]
        }
    }), [data])

    return {
        error, fetchNextPage, status, hasNextPage,
        episodes,
        data,
        isFetching,
        isFetchingNextPage
    }
}