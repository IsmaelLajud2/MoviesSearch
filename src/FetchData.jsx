import axios from "axios";

export const fetchData = async () =>{
    const options ={
        method :'GET',
        url:"https://imdb188.p.rapidapi.com/api/v1/getWeekTop10",
        headers: {
            'x-rapidapi-key': '0246898df3msha5b48705bc12247p175157jsn23627d0ee156',
            'x-rapidapi-host': 'imdb188.p.rapidapi.com'
          }
    }

 try {
    const response = await axios.request(options)
    console.log(response)
    if (response.data && response.data.data) {
        return response.data.data
    } else {
        throw new Error('Fail to fetch')
    }
 } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; 
}

}