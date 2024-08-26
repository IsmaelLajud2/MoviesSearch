import React ,{useState,useEffect} from 'react'
import MoviesCard from './MoviesCard'
import { fetchData } from './FetchData'

const Movies = () => {

const [dataMovies, setDataMovies] = useState([])
const [loading, setLoading] = useState(false)
const [error ,setError] = useState(null)

const getData= async () =>{
    try {
     setLoading(true)
     const data = await fetchData()
     setDataMovies(data)
     setLoading(false)   
    } catch (error) {
        setLoading(false)
        setError(error.message)
    }
}
 
 useEffect(() => {
      getData()  
 }, [])
 





  if (loading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>Error: {error}</p>;
}

  return (
    <> 
    {
        dataMovies ? (
            dataMovies.map((movie ,index) => (
               
               <MoviesCard key={index} movie={movie}></MoviesCard>
             
            ))
        ) : {error}
    }
    </>
  )

}
export default Movies