import React from 'react'
import './MoviesList.css'


import MovieCard from '../Movie Card Component/MovieCard'


export default function MoviesList(props) {

    
    
    // show Details card
    // const [showDetails, setShowDetails] = useState(false)
    
    
    


    return (
        <div className="d-flex justify-content-around ">
            <div className="movieslist-container" >
                {
                    props.movies.map((movie) => <MovieCard 
                        key={movie.id} 
                        movie={movie}
                        handleDelete={props.handleDelete}
                    />)
                }
            </div>
            
        </div>
    )
}
