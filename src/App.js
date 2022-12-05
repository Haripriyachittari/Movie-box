import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


// const movieCard=document.querySelector('.movie');
// console.log(movieCard)
// const app=document.querySelector('.App');

// movieCard.onClick =()=>
// {
//    app.classList.toggle('.hidden');
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      });
  }
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm('')
    }
  }
  const handlechange = (e) => {
    setSearchTerm(e.target.value)
  }
  

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])
  return (
    <div className='App'>
      <header className='header'>
        <div className='logo'>
          <i className="fa-solid fa-film"></i>
          <a href="/"><h1> MovieBox</h1> </a>
        </div>
        <form onSubmit={handleSearch}>

          <input type='text' placeholder='Search...' className='search-input' value={searchTerm} onChange={handlechange} />
          <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i> </button>

        </form>
      </header>
      <div className='movie-container'>
        {movies.map(item => <Movie key={item.id} {...item} />)}
        


      </div>
    </div>

  );
}

export default App;
