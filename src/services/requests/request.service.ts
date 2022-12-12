import {axiosService} from "../axios/axios.service";
import {endpoints} from "../../constants";
import {LocationParamsProps, ParamsProps} from "../../interfaces";
import {EpisodeParamsProps} from "../../interfaces/ParamsProps";

interface getAllCharactersProps {
    page?: number,
    params?: ParamsProps
}

interface getAllLocationProps {
    page?: number,
    params?: LocationParamsProps
}

interface getAllEpisodeProps {
    page?: number,
    params: EpisodeParamsProps
}

export const RequestService = {
    getAllCharacters: async ({page, params}: getAllCharactersProps) =>  await axiosService.get(endpoints.character, {
        params: {
            page: page,
            name: params?.name,
            status: params?.status,
            species: params?.species,
            type: params?.type,
            gender: params?.gender,
            origin: params?.origin,
            location: params?.location
        }
    }),
    getAllLocations: async ({page, params}: getAllLocationProps) => await axiosService.get(endpoints.locations,
        {
            params: {
                page: page,
                name: params?.name,
                dimension: params?.dimension,
                type: params?.type,
            }
        }
    ),
    getAllEpisodes: async ({
                               page,
                               params: {episode = '', name = ''}
                           }: getAllEpisodeProps) => await axiosService.get(endpoints.episodes,
        {
            params: {
                page: page,
                name: name,
            }
        }
    ),
    getCharacterById: async (id: number | string) => await axiosService.get(endpoints.character + `/${id}`),
    getEpisodeById: async (id: number | string) => await axiosService.get(endpoints.episodes + `/${id}`),
};