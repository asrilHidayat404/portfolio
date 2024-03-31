 import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const {id, title} = movies
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=43a84b44b9e916d44359dd17e355faf5&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1');
        const data = await response.json();
        setMovies(data.results); // Assuming the movie data is under the "results" key
        console.table(data.results); // Moved console.log here
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    
    fetchData();
  }, []);
  
  
  
  return (
    <>
      <div className='flex w-full bg-blue-300 flex-wrap'>
      {
        movies.map( movie => {
          return (
            <div className='w-[20] h-[20] m-4' key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" width='300px' />
              <p className='text-red-500'>{movie.id}</p>
              <p>{movie.title}</p>
            </div>
          )
        })
      }
      </div>
    </>
  );
}

export default App;
