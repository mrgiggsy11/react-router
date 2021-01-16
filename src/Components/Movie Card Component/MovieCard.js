import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {Link,useRouteMatch} from 'react-router-dom'

import './MoviesCards.css';

import Rate from '../Rate Stars Component/Rate'


function MovieCard({movie:{id,title,posterUrl,note},handleDelete}) {
  let {url,path}=useRouteMatch()
  

  return (
    <div className="movie-container mr-3 my-1">
      <div className="movie-container ">
        <FontAwesomeIcon className="mb-3 mt-5 fa-lg" icon={faTimes} color="red" onClick={()=>handleDelete(id)}/>
        <img
          src={posterUrl}
          className="card-img-top"
          alt="..."
          style={{ height: '65%' }}
        

        />
        <div className="card-body">
          <h5
            className="card-title text-wrap text-center"
            style={{ fontSize: '17px' }}
          >
            {title.toUpperCase()}
          </h5>
        </div>
        <div
          className="card-footer d-flex justify-content-between align-items-center"
          style={{ height: '60px' }}
        >
          <small className="text-muted">
            <Rate note={note}/>
          </small>
          <Link to={`trailer/${title}`}>
            <button type="button" className="btn btn-outline-secondary text-wrap" >Details</button>
          </Link>
        </div>
      </div>

      
    </div>
  );
}
export default MovieCard;
