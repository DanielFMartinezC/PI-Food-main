import React from "react";
import s from './CSS/CardDeletedRecipe.module.css'

export default function CardDeletedRecipe({ title, image, id }) {


    return (
        <div className={s.root}>
            <div className={s.divTitle}>
                <p className={s.title}>{title}</p>
            </div>

            <div className={s.divImage}>
                {
                    image ? <img className={s.image} src={image} alt={`${title}`} /> : null
                }
            </div>

        </div>
    )
}