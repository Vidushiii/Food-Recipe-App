import React, { useEffect, useState} from 'react';

import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID = "YOURID(GET IT FROM edamam website under recipe API";
  const APP_KEY = "GET IT FROM WEBSITE UNDER DASHBOARD";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);

  };
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className= "search-form">
        <input className= "search-bar" 
        type = "text" 
        value={search} 
        onChange={updateSearch} 
        />
        <button className= "search-button" type = "Submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
       </div>
  );
}

export default App;
