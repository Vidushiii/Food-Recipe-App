import React from "react";
import './ingredient.css';
const Recipe = ({ title, image, ingredients}) => {
    return(
        <div className="recipe">
            <h1 >{title}</h1>
            
            <img src={image} alt="nope"/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
