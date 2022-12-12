import React from 'react';
import classNames from 'classnames/bind';
import styles from './Status.module.scss'
import {svgStatusFoo} from "../../../utils";

const cn = classNames.bind(styles)

interface StatusProps {
    status: 'unknown' | 'Alive' | 'Dead' | string;
    colorText?:'grey'|'white';
    size?:'small'|'medium'|'big'
}

const Status = ({status,colorText='white',size='small'}: StatusProps) => {

    return (
        <span className={cn('status-box')}>
            <img className={cn('svg',`svg-${size}`)} src={svgStatusFoo(status)} alt={'svg'}/>
            <span className={cn('status-text',`${colorText}`,`${size}`)}>{status}</span>
        </span>
    );
};

export default Status;