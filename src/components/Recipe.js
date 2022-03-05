import React from "react";
import style from '../recipe.module.css';
import logo from '../recipes-logo.svg';


export const Recipe = (props) => {
    const { title, calories, image, ingredients, cuisine, weight} = props;

    return (
        <div className={style.recipe}>
            <div className={style.header}>
              <img className={style.logo} src={logo} alt="logo" />
              <p>{cuisine}</p>
            </div>
            <div className={style.body}>
              <img src={image} alt="recipe-image" />
              <div className={style.description}>
                <h1>{title}</h1>
                <p>Calories: {Math.floor(calories)}</p>
                <p>Weight: {Math.floor(weight)} g</p>
              </div>
            </div>
            <div className={style.button}>
              <button>Check recipe</button>
            </div>
        </div>
    );
};