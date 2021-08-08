import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Loading from './components/Loading';
import { useState } from "react";

function App() {
  const [loading,setLoading] = useState(false);
  const [movie,setMovie] = useState("");
  const [resultMovie,setResultMovie] = useState([]);
  const getMovie = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ja-JP&query=${movie}`)
      .then(res => res.json())
        .then((data) => setResultMovie(data.results))
        .catch(err => console.log(`エラーが発生`));
        setLoading(false);
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Search setMovie={setMovie} getMovie={getMovie} />
        {loading  ? <Loading /> : <Results resultMovie={resultMovie}/> }
      </div>
    </div>
  );
}

export default App;