import { useState } from 'react';
import Link from 'next/link';
import style from './index.module.scss';

const NavItems = (props) => {
    const routes = props.routes;
    if(routes instanceof Array){
        return routes.map((val)=>{
            return <li className={style.navItem}>
                        <Link href={val.path}>{val.name}</Link>
                        <span className={style.navArrow}></span>
                    </li>
        })
    }else{
        return <div>empty</div>
    }
}


export default NavItems;