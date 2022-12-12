import {useMemo} from "react";
import {useInfiniteQuery} from "@tanstack/react-query";
import {RequestService} from "../services";

export const useResident = (id:string) => {

    const getData = async ()=>{
        const {data} = await RequestService.getCharacterById(id);
        return data
    }

    const { data, error, fetchNextPage, status, hasNextPage,isFetching ,isFetchingNextPage} = useInfiniteQuery(
        ['residents'],
        () => getData()
    )

    const residents = useMemo(() => data?.pages.reduce((prev, page) => {
        return {
            info: page.info,
            results: [...prev.results, ...page.results]
        }
    }), [data])

    return {
        error, fetchNextPage, status, hasNextPage,
        residents,
        data,
        isFetching,
        isFetchingNextPage
    }
}