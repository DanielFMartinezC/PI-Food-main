import React from 'react';
import { useLocation } from 'react-router-dom';
import ButtonHome from './Buttons/ButtonHome';
import ButtonCreateRecipe from './Buttons/ButtonCreateRecipe';

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location
    if (pathname === '/') {
        return null
    } else if (pathname === '/CreateRecipe') {
        return (
            <div>
                <ButtonHome />
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <ButtonHome />
                </div>
                <div>
                    <ButtonCreateRecipe />
                </div>
            </div>
        )
    }
}