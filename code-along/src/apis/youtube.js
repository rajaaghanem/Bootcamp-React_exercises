import axios from "axios";

const KEY = "AIzaSyAjC8kfARnMAplj_dNStc7-iHVanbRdCsA";

export default axios.create({
 baseURL: 'https://www.googleapis.com/youtube/v3',
 params:{
     part: "snippet",
     type: 'video',
     maxResults: 5,
     key: KEY
 }
});