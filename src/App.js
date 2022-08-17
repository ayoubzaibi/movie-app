import './App.css';
import MovieList from './component/MovieList';
import { Movies } from './MovieData';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './component/Search';
import AddMovie from './component/AddMovie';


function App() {
  const [movies, setMovies] = useState(Movies)

  const [text, setText] = useState("");

  const handleAdd=(newMovie)=>{
    setMovies([...movies,newMovie])
  }

  const handleEdit=(editedMovie)=>{
    setMovies([...movies.map(el=>el.id==editedMovie.id?editedMovie:el)])
  }

  return (
    <div className="App">
      <Search text={text} setText={setText} />
      <MovieList edit={handleEdit} movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())||el.year.includes(text))} />
      <AddMovie add={handleAdd} />
    </div>
  );
}

export default App;
