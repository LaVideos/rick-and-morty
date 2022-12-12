import React from 'react';
import classNames from "classnames/bind";
import styles from "./Loading.module.scss";

const cn = classNames.bind(styles)


const Loading = () => {
    return (
        <div className={cn('box')}>
            <div className={cn('loader')}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Loading;