import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Route, Switch} from 'react-router-dom';


import './App.css';
import { moviesList } from './Components/Input.js'
import Filter from './Components/Filter Component/FilterComponent'
import MoviesList from './Components/List Movies Component/MoviesList'
import Modal from './Components/Add Movie Component/AddMovie';
import Rate from './Components/Rate Stars Component/Rate';
import Trailer from './Components/Trailer Component/Trailer';




function App(props) {



  const [movies, setMovies] = useState(moviesList)
  const [add, setAdd] = useState(() => { return false })
  const AddMovieDetail = () => {
    setAdd(!add)
  }
  // add Movie Details
  const handleSaveClick = ({ details }) => {

    const newMovie =
    {
      id: movies.length + 1,
      title: details.title,
      description: details.description,
      posterUrl: details.url,
      note: details.note
    }
    setMovies([...moviesList, newMovie])
    setAdd(!add)
  }
  // Search Fonction 
  const seachValue = (e) => {
    setMovies(moviesList.filter((el) => el.title.includes(e.target.value.toLowerCase())))
  }
  // filter rate
  const [rateSearch, setRateSearch] = useState(0)
  const handleRate = (index) => {
    setRateSearch(index)
    setMovies(moviesList.filter((el) => Math.floor(el.note) === index))
  }

  // Delete item
  const handleDelete = (id) => {
    const deleate = movies.filter((item, i) => i !== id - 1)
    setMovies(deleate)
  }




  return (
    
      <div className="app d-flex justify-content-start align-items-center">
        <div className="card text-white bg-dark mt-5" style={{ width: "1500px" }}>
          <div className="card-header d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <button type="button"
                className="btn btn-outline-dark border-0 flex-grow-1"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={AddMovieDetail}>
                <FontAwesomeIcon color="gray" icon={faPlus} />
              </button>
              {add ? <Modal add={add} handleSaveClick={handleSaveClick} /> : null}
            </div>
            <Filter seachValue={seachValue} />
            <Rate handleRate={handleRate} note={rateSearch} />
          </div>
          <div className="card-body d-flex justify-content-start" >
            <Switch>
              <Route exact path="/">
                <MoviesList movies={movies} handleDelete={handleDelete} />
              </Route>
              <Route path="/trailer/:title">
                <Trailer movies={movies}/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    
  );
}

export default App;
