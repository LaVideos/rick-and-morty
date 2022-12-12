import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {CharacterCard} from "../index";
import {createStrFromArr} from "../../utils";
import {useResident} from "../../hooks/use-resident";
import {CardProps} from "../../interfaces";


interface ResidentsProps {
    residents: string[]
}

const Residents = ({residents:resArr}: ResidentsProps) => {
    const {
        residents
    } = useResident(createStrFromArr(resArr));

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[ Navigation, Pagination, Mousewheel, Keyboard]} className='mySwiper'>
                {residents&&residents.map((value:CardProps) => (
                        <SwiperSlide id={'resident'} key={value.id} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <CharacterCard card={value} boxShadow={false}/>
                        </SwiperSlide>
                    ))}

            </Swiper>
        </>
    );
};

export default Residents;


