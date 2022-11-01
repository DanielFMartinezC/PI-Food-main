import React from "react";

export default function CardDeletedRecipe({ title, image, id }) {
    
   
    return (
        <div>
            <p>{title}</p>
            <div>
                {
                    image ? <img src={image} alt={`${title}`} /> : null
                }
            </div>
           
        </div>
    )
}