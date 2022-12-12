import React from 'react';
import {Outlet} from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './Body.module.scss'
const cn = classNames.bind(styles)

const Body = () => {
    return (
        <div className={cn('body-container')}>
            <Outlet/>
        </div>
    );
};

export default Body;