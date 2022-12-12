import React from 'react';
import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import {FieldValues, UseFormRegister} from "react-hook-form";
import {BsSearch} from "react-icons/bs";

const cn = classNames.bind(styles)

interface InputProps {
    placeHolder: string,
    name: string;
    register: UseFormRegister<FieldValues> | any,
    label:string,
    disabled?:boolean
}

const Input = ({register,name,placeHolder,label,disabled=false}:InputProps) => {
    return <>
        <div className={cn('c-formContainer')}>
            <div className={cn('c-form')}>
                <span className={cn('search')}><BsSearch/></span>
                <input {...register(`${name}`)} disabled={disabled} className={cn('c-form__input')} placeholder={placeHolder} />
            </div>
        </div>
    </>
};

export default Input;