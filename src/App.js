import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './recipes-logo.svg';

//Import components
import { Recipe } from './components/Recipe';

export const App = () => {

  //API credentials
  const APP_ID = 'b4dbaf08';
  const APP_KEY = '1adf8b60053086704e765206871deea7';

  //App state
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  //Event handlers
  const queryChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <header>
        <img className="logo" src={logo} alt='' />
        <nav>
          <p>Home</p>
          <p>My recipes</p>
        </nav>
      </header>
      <h1>Find the recipe you need</h1>
      <form className="search-form" onSubmit={submitSearchHandler}>
        <input className="search-bar" type="text" value={search} onChange={queryChangeHandler} placeholder="Type the name of ingredient"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => {
        return <Recipe key={recipe.recipe.label} 
                       title={recipe.recipe.label} 
                       calories={recipe.recipe.calories}
                       cuisine={recipe.recipe.cuisineType} 
                       image={recipe.recipe.image} 
                       ingredients={recipe.recipe.ingredients}
                       weight={recipe.recipe.totalWeight} />
      })}
      </div>
    </div>
  );
}


