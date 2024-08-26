import React from 'react'
import './CardStyles.css'
const MoviesCard = ({movie}) => {
  return (
  <>
    <div className='card-container'>
    <img className='imagen-movie' src={movie.primaryImage.imageUrl} alt={movie.primaryImage.id} />
    <div className='card-content'>
 <h1>{movie.originalTitleText.text}</h1>
 <p>Rating: {movie.ratingsSummary.aggregateRating}</p> 

</div>
</div>
   

  </>
  )
}

export default MoviesCard