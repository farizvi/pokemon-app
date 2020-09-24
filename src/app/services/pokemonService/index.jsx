import axios from 'axios';

const getPokemons = async (url) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return await axios.get(url, config);
}

const pokemonService = {
    getPokemons
}

export default pokemonService;
