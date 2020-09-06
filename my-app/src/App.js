import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const APP_ID = "85b3f682";
  const APP_KEY = "c3416518992e5b8d201901481a6889a9";

  const [recipes, setRecipes] = useState([]);
  useEffect( () => {
    getRecipies();
  }, [] );

  const getRecipies = async () => {
    const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}');
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className= "search-form">
        <input className= "search-bar" type = "text"></input>
        <button className= "search-button" type = "Submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter+1)}>{counter}</h1>
    </div>
  );
}

export default App;
