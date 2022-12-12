import React from 'react';
import classNames from "classnames/bind";
import styles from "./Radio.module.scss";
import {FieldValues, UseFormRegister} from "react-hook-form";

const cn = classNames.bind(styles)

interface RadioProps{
    register?: UseFormRegister<FieldValues> | any,
    text:string|JSX.Element;
    name:string;
    value:string;
}


const Radio = ({text,register,name,value}:RadioProps) => {
    return (
            <label className={cn('rad-label')}>
                <input type="radio" value={value} {...register(`${name}`)} className={cn('rad-input')}/>
                    <div className={cn('rad-design')}></div>
                    <div className={cn('rad-text')}>{text}</div>
            </label>
    );
};

export default Radio;