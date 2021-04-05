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
            if (data != '' && data != undefined)
            {
                // console.log(JSON.stringify(data.results,null,2));
                return data.results;
            }
            
        } catch (error) {
            console.log(error.message);
        }
    }
 }

export default MovieListService