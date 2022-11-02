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
    } else if (pathname === '/CreateRecipe') {
        return (
            <div className={s.root}>
                <ButtonHome />
            </div>
        )
    } else {
        return (
            <div className={s.root}>
                <div>
                    <ButtonHome />
                </div>
                <div>
                    <ButtonCreateRecipe />
                </div>
                {
                    pathname === '/DeletedRecipes' ? null : <div> <ButtonRestoreRecipe /> </div>
                }

            </div>
        )
    }
}