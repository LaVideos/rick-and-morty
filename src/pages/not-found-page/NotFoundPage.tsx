import React from 'react';
import classNames from "classnames/bind";
import styles from "./NotFoundPage.module.scss";
import {Button} from "../../components";
import {useNavigate} from "react-router-dom";

const cn = classNames.bind(styles)


const NotFoundPage = () => {

    const navigate = useNavigate();



    return (
       <div className={cn('box')}>
           <div className={cn('background-img')}>
               <div className={cn('space')}></div>
               <div className={cn('wrapper')}>
                   <div className={cn('img-wrapper')}>
                       <span>44</span>
                   </div>
                   <p>The page you are trying to search has been <br/> burned by Rick's laser gun.</p>
                   <Button onclick={()=>navigate('/characters')} text={'GET ME HOME'} size={"large"}/>
               </div>
           </div>
       </div>
    );
};

export default NotFoundPage;