let apiUrl = "http://localhost:5000/api/example/"
const axios = require('axios');


async function getExampleData(input){
    axios.get(apiUrl+input)
    .then(function(response){
        return response.data[0] ; 
    })
    .catch(function(error){
        return [];
    })
}
export {getExampleData};