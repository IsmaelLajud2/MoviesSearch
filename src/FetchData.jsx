import axios from "axios";

export const fetchData = async () =>{
    const options ={
        method :'GET',
        url:"https://imdb188.p.rapidapi.com/api/v1/getWeekTop10",
        headers: {
            'x-rapidapi-key': 'cc13e8b8c5msh868dc27d749fff1p149794jsnb75076f238a',
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