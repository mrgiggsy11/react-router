import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Trailer(props) {
    let {params } = useRouteMatch();
    console.log(useRouteMatch())
    let movie=props.movies.find((el)=>el.title===params.title)
    console.log(movie)
    return (

        <div className="card mb-3 bg-dark w-75 h-100" style={{margin:"auto",overflow:"hidden"}}>
            <iframe title={movie.id} width="100%" height="780" src={movie.trailerUrl} style={{border:0}} ></iframe>
            <div className="card-body">
                <h5 className="card-title">{movie.title.toUpperCase()} Trailer</h5>
                <p className="card-text">{movie.description}</p>
                <Link to="/">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} color="gray" size="2x"/>
                </Link>
            </div>
        </div>

    )
}

