import React, {useContext, useState, Fragment} from 'react';
import Pokemon from '../pokemon-card';
import {useFetch} from '../../app/hooks';
import { AppContext } from '../../app/context/appState';

const Pokemons = () => {
    // const [ response, isLoading, isError ] = useFetch();
    const [doFetch, setDoFetch] = useState(false);

    const context = useContext(AppContext);
    const { isLoading, isError, result } = context;

    // useEffect(() => {
    //     setDoFetch(true);
    // }, []);

    // const errorMessage = error && error.message;
    console.log(result)

    const renderPokemons = ()  =>
        !isLoading &&
        !isError &&
        result &&
        result.length > 0 && (
            <div id="wrapper-main">
                <div id="wrapper-grid">
                    {result.map((pokemon) => (
                            <Pokemon key={pokemon.number}
                                    id={pokemon.number}
                                   name={pokemon.name}
                                   description={pokemon.description}
                            />
                    ))
                    }
                </div>
            </div>
        );

    return (
        <Fragment>
            {isError && <div>Error</div>}
            {isLoading ? <div>Fetching pokemons...</div> : <div>{renderPokemons()}</div>}
        </Fragment>
    )
};

export default Pokemons;
