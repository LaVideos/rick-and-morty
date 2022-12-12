import React from 'react';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';

import "animate.css";

import classNames from 'classnames/bind';
import styles from './Error.module.scss'
import {CloseBtn, ModalComponent} from "../index";
import {useModal} from "../../hooks/show-modal";

const cn = classNames.bind(styles)


const Error = () => {

    let {isShowing,toggle} = useModal();


    return (isShowing?<ModalComponent isShowing={isShowing} children={
        <div className={cn('error-container',"animate__animated","animate__headShake")}>
            <CloseBtn onclick={toggle}></CloseBtn>
            <div className={cn('error-box')}>
                <div className={cn('error-title-container')}>
                    <span className={cn('code')}>404</span>
                    <div className={cn('error-title')}>Not found any data</div>
                </div>
            </div>
            <div className={cn('error-advise')}>
                <div className={cn('error-icon-box')}><GppMaybeOutlinedIcon/></div>
                <div className={cn('error-advise-title')}>Please enter another value</div>
                <div className={cn('error-icon-box')}><GppMaybeOutlinedIcon/></div>
            </div>
        </div>
    }/>:null);
};

export default Error;