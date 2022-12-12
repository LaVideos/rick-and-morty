import dead from "../assets/svg/tombstone.svg";
import alive from "../assets/svg/heart.svg";
import unknown from "../assets/svg/suspect.svg";

export const svgStatusFoo = (status_:string)=>{
    if(status_==='Dead'){
        return dead
    }
    else if(status_==='Alive'){
        return alive
    }else {
        return unknown
    }
}