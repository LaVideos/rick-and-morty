import React from 'react';
import classNames from "classnames/bind";
import styles from "./Select.module.scss";
import {BsChevronDown,BsChevronUp} from "react-icons/bs";
import {FaDisease, FaPoop, FaRobot} from "react-icons/fa";
import {GiAlienBug, GiBoar, GiGoblinHead, GiKrakenTentacle, GiSwordman} from "react-icons/gi";
import {RiAliensFill} from "react-icons/ri";
import {AiOutlineQuestion} from "react-icons/ai";
import {FieldValues, UseFormRegister} from "react-hook-form";



const cn = classNames.bind(styles)

interface SelectProps{
    register: UseFormRegister<FieldValues> | any;
}


const Select = ({register}:SelectProps) => {

    return (<div className={cn('select-box')}>
        <input type="checkbox" className={cn('options-view-button')}/>
            <div className={cn('brd','select-button')}>
                <div className={cn('selected-value')}>
                    <span className={cn('select')}>Select species</span>
                </div>
                <div className={cn('chevrons')}>
                    <span className={cn('chevron-up')}><BsChevronUp/></span>
                    <span className={cn('chevron-down')}><BsChevronDown/></span>
                </div>
            </div>
            <div className={cn('options')}>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} {...register('species')} type="radio" value="Human"/>
                        <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Human"/>
                    <GiSwordman/>
                    <span className={cn('label')}>Human</span>
                    <span className={cn('opt-val')}>Human</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="Robot"/>
                        <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Robot"/>
                    <FaRobot/>
                    <span className={cn('label')}>Robot</span>
                            <span className={cn('opt-val')}>Robot</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="Animal"/>
                    <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Animal"/>
                     <GiBoar/>
                    <span className={cn('label')}>Animal</span>
                    <span className={cn('opt-val')}>Animal</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="Alien"/>
                    <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Alien"/>
                    <RiAliensFill/>
                    <span className={cn('label')}>Alien</span>
                    <span className={cn('opt-val')}>Alien</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="Mythological Creature"/>
                    <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Mythological Creature"/>
                    <GiKrakenTentacle/>
                    <span className={cn('label')}>Mythological Creature</span>
                    <span className={cn('opt-val','opt-val-creature')}>Mythological Creature</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="Humanoid"/>
                    <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Humanoid"/>
                    <GiGoblinHead/>
                    <span className={cn('label')}>Humanoid</span>
                    <span className={cn('opt-val')}>Humanoid</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="Cronenberg"/>
                    <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Cronenberg"/>
                     <GiAlienBug/>
                    <span className={cn('label')}>Cronenberg</span>
                    <span className={cn('opt-val')}>Cronenberg</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="Poopybutthole"/>
                    <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Poopybutthole"/>
                    <FaPoop/>
                    <span className={cn('label')}>Poopybutthole</span>
                    <span className={cn('opt-val')}>Poopybutthole</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="Disease"/>
                    <input className={cn('s-c','bottom')} type="radio" {...register('species')} value="Disease"/>
                    <FaDisease/>
                    <span className={cn('label')}>Disease</span>
                    <span className={cn('opt-val')}>Disease</span>
                </div>

                <div className={cn('option')}>
                    <input className={cn('s-c','top')} type="radio" {...register('species')} value="unknown"/>
                    <input className={cn('s-c','bottom')} type="radio"{...register('species')} value="unknown"/>
                    <AiOutlineQuestion/>
                    <span className={cn('label')}>unknown</span>
                    <span className={cn('opt-val')}>unknown</span>
                </div>


                <div className={cn('option-bg')}></div>
            </div>
    </div>
    );
};

export default Select;