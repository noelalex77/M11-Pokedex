import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/noelalex77/pokemondata',  
    withCredentials: false,
    headers: {
        Accept: 'application/json',  
        'Content-Type': 'application/json' 
    }
})

export default {
    getPokemon() { 
        return apiClient.get('/pokemondata') 
    },
    
    getPokemonID(id){
        return apiClient.get('/pokemondata/' + id)
    }
}
