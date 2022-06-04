import React from "react";
import './index.css';
import {Rotes,Route,Link} from 'react-router dom';
import { About } from "../list";
import { Characters } from "../list1";
import { Chaing } from "../list2";

export default function For2(){
    return(
<div>
    <header className="header">
<div className="container">
    <div className="Headerinner">
        <a className="logo">
            
        </a>
        <nav className="menu">
            <ul>
                <li className="menu__item">
                    <Link className="menu__link" to='/About'>Описание
</Link></li>
<li className="menu__item">
                    <Link className="menu__link" to='/Characters'>Характеристики
</Link></li>
<li className="menu__item">
                    <Link className="menu__link" to='/Chaing'>Стоимость
</Link>



                </li>
            </ul>
        </nav>

    </div>
</div>
    </header>
    <Rotes>
    <Route path='/About' element={<About/>}/>
    <Route path='/Characters' element={<Characters/>}/>
    <Route path='/Chaing' element={<Chaing/>}/>
</Rotes>

</div>
    );
}