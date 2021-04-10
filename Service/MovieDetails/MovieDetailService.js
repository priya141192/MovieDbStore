import axios from "axios";
import { useState } from "react";
import { Base_Url,Api_Key } from "../../Utilities/Constants/ServiceConstants";

const MovieDetailService = {
    GetMovieDetails : async(MovieId) => {
        // console.log("GetMovieDetails called",+MovieId)
        try{
            let url = Base_Url + "movie/"+MovieId+"?api_key="+Api_Key+"&language=en-US";
            // (await axios.get(url).then(function (response) {
            //     // console.log(response.data)
            //     return response.data
            //   }));
            const response = await axios.get(url);
            const { data } = response;
            if (data != '' && data != undefined)
            {
              // const result = data//Object.keys(data).map(key => ({[key]: data[key]}));
                // console.log(JSON.stringify(result,null,2));
                return data;
            }
        }
        catch(error)
        {
            console.log(error.message)
        }
    },

    GetMovieCastandCrew : async(MovieId) => {
      console.log("GetMovieCastandCrew called",+MovieId)
        try{
            let url = Base_Url + "movie/"+MovieId+"/credits"+"?api_key="+Api_Key+"&language=en-US";
            const response = await axios.get(url);
            const { data } = response;
            if (data != '' && data != undefined)
            {
              // const result = data//Object.keys(data).map(key => ({[key]: data[key]}));
                // console.log(JSON.stringify(data,null,2));
                return data;
            }
        }
        catch(error)
        {
            console.log(error.message)
        }
    }
    
}

export default MovieDetailService