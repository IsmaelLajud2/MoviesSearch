import React from 'react'
import './CardStyles.css'
const MoviesCard = ({movie}) => {
  return (
  <>

   <h1>{movie.originalTitleText.text}</h1>
   <img className='imagen-movie' src={movie.primaryImage.imageUrl} alt={movie.primaryImage.id} />
   <p>Rating: {movie.ratingsSummary.aggregateRating}</p>
 
  </>
  )
}

export default MoviesCard