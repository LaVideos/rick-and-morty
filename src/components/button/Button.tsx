import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss'
const cn = classNames.bind(styles)


interface loadBtnProps{
    onclick:()=>void;
    text:string;
    size:'small'|'medium'|'large'
}


const Button = ({onclick,text,size='medium'}:loadBtnProps) => {
    return (
        <div className={cn('loadMore',`${size}`)} onClick={onclick}>
            <button className={cn('load-more-text',`${text.length>15?'big-text':'small-text'}`)}>{text}</button>
        </div>
    );
};

export default Button;