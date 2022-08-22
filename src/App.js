import './App.css';
import MovieList from './component/MovieList';
import { Movies } from './MovieData';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './component/Search';
import AddMovie from './component/AddMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LearnMore from './component/LearnMore';




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
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<> <Search text={text} setText={setText} /><MovieList edit={handleEdit} movies={movies.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())||el.year.includes(text))} /> </>}/>
        <Route path="/MovieData/:id" element={<LearnMore movies={movies} />} />
        </Routes>
      </BrowserRouter>
      <AddMovie add={handleAdd} />
    </div>
  );
}

export default App;
