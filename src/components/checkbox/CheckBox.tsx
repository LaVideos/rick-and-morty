import React, {useState} from 'react';
import classNames from "classnames/bind";
import styles from "./CheckBox.module.scss";
import {FieldValues, UseFormRegister} from "react-hook-form";

const cn = classNames.bind(styles)

interface CheckBox{
    register?: UseFormRegister<FieldValues> | any,
    name:string,
    value?:string|boolean
}


const CheckBox = ({register,name,value}:CheckBox) => {

    const [state,setState] = useState(false);

    return (
        <div className={cn('grid')}>
            <label className={cn('checkbox','bounce')}>
                <input type="checkbox" value={value} {...register(`${name}`)} onChange={()=>setState(!state)} checked={state}/>
                    <svg viewBox="0 0 21 21">
                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                    </svg>
            </label>
        </div>
    );
};

export default CheckBox;