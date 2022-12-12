import s1 from '../assets/jpeg/posters/Rick_and_Morty_Season_1.webp'
import s2 from '../assets/jpeg/posters/s2.jpg'
import s3 from '../assets/jpeg/posters/s3.jpg'
import s4 from '../assets/jpeg/posters/s4.jpg'
import s5 from '../assets/jpeg/posters/s5.jpg'
import s6 from '../assets/jpeg/posters/s6.jpg'
import default_ from '../assets/jpeg/posters/default.jpg'

export const seasonFoo=(season:string)=>{
    if(season.includes('S01'))return s1
    else if(season.includes('S02'))return s2
    else if(season.includes('S03'))return s3
    else if (season.includes('S04'))return s4
    else if (season.includes('S05'))return s5
    else if (season.includes('S06'))return s6
    else return default_
}