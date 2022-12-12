import React from 'react';
import {FaDisease, FaPoop, FaRobot} from "react-icons/fa";
import {GiAlienBug, GiBoar, GiGoblinHead, GiKrakenTentacle, GiSwordman} from "react-icons/gi";
import {RiAliensFill} from "react-icons/ri";
import {AiOutlineQuestion} from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Species.module.scss";

const cn = classNames.bind(styles)

interface SpeciesProps {
    species: 'Robot' | 'Alien' | 'unknown' | 'Humanoid' | 'Human' | 'Disease' | 'Animal' | 'Poopybutthole' | 'Cronenberg' | 'Mythological Creature' | string,
    colorText?:'grey'|'white',
    size?:'small'|'medium'|'big'
}

const Species = ({species,colorText='white',size='small'}: SpeciesProps) => {
    return <span className={cn('gender-box')}>
        <span className={cn('gender-text',`${colorText}`,`${size}`)}> - {species}</span>
        <span
            className={cn(`svg-species-${species === 'Mythological Creature' ? 'Mythological' : species}`, 'svg', 'svg-species',`svg-${size}`)}>
                        <>{species === "Robot" && <FaRobot/>}</>
                        <>{species === "Animal" && <GiBoar/>}</>
                        <>{species === "Alien" && <RiAliensFill/>}</>
                        <>{species === "Mythological Creature" && <GiKrakenTentacle/>}</>
                        <>{species === "Humanoid" && <GiGoblinHead/>}</>
                        <>{species === "Human" && <GiSwordman/>}</>
                        <>{species === "unknown" && <AiOutlineQuestion/>}</>
                        <>{species === "Cronenberg" && <GiAlienBug/>}</>
                        <>{species === "Poopybutthole" && <FaPoop/>}</>
                        <>{species === "Disease" && <FaDisease/>}</>
            </span></span>
};

export default Species;