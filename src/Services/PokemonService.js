import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/noelalex77/pokemondata',  // notice that it doesn't include books
    withCredentials: false,
    headers: {
        Accept: 'application/json',   // what client expect
        'Content-Type': 'application/json' // descriping our request content (none here)
    }
})

export default {
    getPokemon() { 
        return apiClient.get('/pokemondata') //  notice that /books will be append to the baseURL
    },
    
    getPokemonID(id){
        return apiClient.get('/pokemondata/' + id)
    }
}