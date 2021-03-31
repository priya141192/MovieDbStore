import axios from "axios";
import { Base_Url,Api_Key } from "../../Utilities/Constants/ServiceConstants";

const MovieListService = 
{
    GetMovieList : async(page,region) =>
   {
       console.log('service called')
       try {
            let url = Base_Url + 'movie/now_playing?api_key=' + Api_Key + '&language=en-US&page=' + page+'&region='
            // console.log(url);
            const response = await axios.get(url);
            const { data } = response;
            // console.log("movie list" + data);
            if (data != '' && data != undefined)
            {
                // console.log(data);
                return data;
            }
            
        } catch (error) {
            console.log(error.message);
        }

// let url = (Base_Url+'movie/'+id+'/lists?api_key='+Api_Key+'&language=en-US&page='+page)
// const requestOptions = {
//     method: 'GET',
//     headers: {}
// };
// console.log(url)
// return fetch(url, requestOptions)
// .then(response => response.json())
// .then(data => {
//     return data
// });
    }
 }

export default MovieListService