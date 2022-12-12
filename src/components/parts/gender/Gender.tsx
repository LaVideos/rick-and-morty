import React from 'react';
import {AiOutlineQuestion} from "react-icons/ai";
import {TbGenderFemale, TbGenderMale} from "react-icons/tb";
import {RiGenderlessLine} from "react-icons/ri";
import classNames from "classnames/bind";
import styles from "./Gender.module.scss";
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi";


const cn = classNames.bind(styles)

interface GenderProps{
    gender:'Male'|'Female'|'unknown'|'Genderless'|string;
    size?:'small'|'medium'|'big'
}


const Gender = ({gender,size='small'}:GenderProps) => {
    return (
        <span className={cn(`gender-${gender}`, 'gender-box',`${size}`)}>
                <>{gender === "unknown" && <AiOutlineQuestion/>}</>
                <>{gender === "Male" && <TbGenderMale/>}</>
                <>{gender === "Female" && <TbGenderFemale/>}</>
                <>{gender === "Genderless" && <RiGenderlessLine/>}</>
                <>{gender === "any" && <GiPerspectiveDiceSixFacesRandom/>}</>
            </span>
    );
};

export default Gender;