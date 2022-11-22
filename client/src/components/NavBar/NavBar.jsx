import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonHome from './Buttons/ButtonHome';
import ButtonCreateRecipe from './Buttons/ButtonCreateRecipe';
import ButtonRestoreRecipe from './Buttons/ButtonRestoreRecipes'
import s from './NavBar.module.css';

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location
    if (pathname === '/') {
        return null
        // } else if (pathname === '/CreateRecipe') {
        //     return (
        //         <div className={s.root}>
        //             <ButtonHome />
        //             <div> <ButtonRestoreRecipe /> </div>
        //         </div>
        //     )
    } else {
        return (
            <div className={pathname === '/CreateRecipe' ? s.rootRecipe : s.root}>
                <div>
                    <ButtonHome />
                </div>
                <div>
                    <ButtonCreateRecipe />
                </div>
                <div>
                    <ButtonRestoreRecipe />
                </div>


            </div>
        )
    }
}